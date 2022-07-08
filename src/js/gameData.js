import PubSub from 'pubsub-js';
import Gameboard, { GRID_SIZE, Status } from './gameboard';
import Ship from './ship';
import Player, { isBot } from './player';
import { pipe } from './util';
import SHIPS_DATA from '../data/ships.json';
import {
  START_GAME,
  DISPLAY_SETUP_PHASE,
  CHECK_COORDINATES,
  COORDINATES_FREE,
  PLACE_SHIP,
  PLACEMENT_VALID,
  PLACE_SHIPS_RANDOM,
  SETUP_PHASE_NEXT,
  SETUP_PHASE_INCOMPLETE,
  DISPLAY_ATTACK_PHASE,
  ATTACK,
  MISS,
  HIT,
  SUNK,
  FLEET_GONE,
  NEW_ROUND,
  RESET_GAME,
} from './eventTypes';

export const GameMode = Object.freeze({
  VS_FRIEND: 0,
  VS_BOT: 1,
});

export default function GameData() {
  let state = {
    gameMode: null,
    playerOne: null,
    playerTwo: null,
    availableFleet: null,
    currentSetupPlayer: null,
    currentAttacker: null,
    currentOpponent: null,
  };

  PubSub.subscribe(START_GAME, (_, data) => {
    state.gameMode = data.gameMode;
    state.playerOne = {
      ...Player({ name: data.playerOneName }),
      gameboard: Gameboard(),
    };

    let playerTwo = null;
    if (state.gameMode === GameMode.VS_BOT) {
      playerTwo = pipe(Player, isBot)({ name: data.playerTwoName });
    } else {
      playerTwo = Player({ name: data.playerTwoName });
    }
    state.playerTwo = {
      ...playerTwo,
      gameboard: Gameboard(),
    };

    state.availableFleet = generateFleet();
    state.currentSetupPlayer = state.playerOne;

    PubSub.publish(DISPLAY_SETUP_PHASE, {
      playerName: state.currentSetupPlayer.name,
      gameboard: state.currentSetupPlayer.gameboard.getGrid(),
      fleet: state.availableFleet,
    });
  });

  PubSub.subscribe(CHECK_COORDINATES, (_, data) => {
    const ship = getShip(data.shipId);
    if (!ship) {
      return;
    }
    const canPlaceShip = state.currentSetupPlayer.gameboard.canPlaceShip(
      data.startCoords,
      data.shipOrientation,
      ship.length,
      ship.id
    );

    if (canPlaceShip) {
      PubSub.publish(COORDINATES_FREE, {
        startCoords: data.startCoords,
        shipOrientation: data.shipOrientation,
        shipLength: ship.length,
      });
    }
  });

  PubSub.subscribe(PLACE_SHIP, (_, data) => {
    const ship = getShip(data.shipId);
    if (!ship) {
      return;
    }

    let placedShip = null;
    if (data.oldStartCoords) {
      placedShip = state.currentSetupPlayer.gameboard.moveShip(
        data.oldStartCoords,
        { i: data.startCoords.x, j: data.startCoords.y },
        data.shipOrientation
      );
    } else {
      placedShip = state.currentSetupPlayer.gameboard.placeShip(
        data.startCoords,
        data.shipOrientation,
        ship
      );
    }

    if (placedShip) {
      PubSub.publish(PLACEMENT_VALID, {
        startCoords: data.startCoords,
        shipOrientation: data.shipOrientation,
        shipLength: ship.length,
        shipId: ship.id,
      });
    }
  });

  PubSub.subscribe(PLACE_SHIPS_RANDOM, () => {
    state.currentSetupPlayer.gameboard.placeShipsRandom(state.availableFleet);
    PubSub.publish(DISPLAY_SETUP_PHASE, {
      playerName: state.currentSetupPlayer.name,
      gameboard: state.currentSetupPlayer.gameboard.getGrid(),
      fleet: state.availableFleet,
      random: true,
    });
  });

  PubSub.subscribe(SETUP_PHASE_NEXT, () => {
    if (
      state.currentSetupPlayer.gameboard.getFleet().length !==
      state.availableFleet.length
    ) {
      PubSub.publish(SETUP_PHASE_INCOMPLETE);
      return;
    }

    state.availableFleet = generateFleet();
    if (state.currentSetupPlayer === state.playerOne) {
      if (state.gameMode === GameMode.VS_FRIEND) {
        state.currentSetupPlayer = state.playerTwo;
        PubSub.publish(DISPLAY_SETUP_PHASE, {
          playerName: state.currentSetupPlayer.name,
          gameboard: state.currentSetupPlayer.gameboard.getGrid(),
          fleet: state.availableFleet,
        });
        return;
      }
      // In this case playerTwo is a bot
      state.currentSetupPlayer = null;
      state.playerTwo.gameboard.placeShipsRandom(state.availableFleet);
    }

    swapRoles();

    PubSub.publish(DISPLAY_ATTACK_PHASE, generateAttackPhaseData());

    if (state.currentAttacker.isBot) {
      setTimeout(() => {
        const move = state.currentAttacker.getMove(GRID_SIZE);
        PubSub.publish(ATTACK, { coords: move });
      }, 1000);
    }
  });

  PubSub.subscribe(ATTACK, (_, data) => {
    const attack = state.currentOpponent.gameboard.receiveAttack(data.coords);
    if (attack === null) {
      return;
    }

    if (state.currentAttacker.isBot) {
      state.currentAttacker.lastMoveFeedback(attack, GRID_SIZE);
    }

    if (attack.status === Status.MISS) {
      swapRoles();
      PubSub.publish(MISS, {
        coords: data.coords,
        ...generateAttackPhaseData(),
      });
    } else if (attack.status === Status.HIT) {
      PubSub.publish(HIT, { coords: data.coords });
    } else if (attack.status === Status.SUNK) {
      const attackerName = state.currentAttacker.name;
      const opponentName = state.currentOpponent.name;
      PubSub.publish(SUNK, {
        shipId: attack.ship.id,
        shipName: attack.ship.name,
        attackerName,
        opponentName,
        shipCoords: attack.shipCoords,
        adjacentCoords: attack.adjacentCoords,
      });
      if (state.currentOpponent.gameboard.isFleetSunk()) {
        state.currentAttacker.incrementScore();
        PubSub.publish(FLEET_GONE, {
          winnerName: attackerName,
          loserName: opponentName,
        });
        return;
      }
    }

    if (state.currentAttacker.isBot) {
      setTimeout(() => {
        const move = state.currentAttacker.getMove(GRID_SIZE);
        PubSub.publish(ATTACK, { coords: move });
      }, 1000);
    }
  });

  PubSub.subscribe(NEW_ROUND, () => {
    state.playerOne.gameboard = Gameboard();
    state.playerTwo.gameboard = Gameboard();
    if (state.playerTwo.isBot) {
      state.playerTwo.clearHistory();
    }

    state.availableFleet = generateFleet();
    state.currentSetupPlayer = state.playerOne;

    PubSub.publish(DISPLAY_SETUP_PHASE, {
      playerName: state.currentSetupPlayer.name,
      gameboard: state.currentSetupPlayer.gameboard.getGrid(),
      fleet: state.availableFleet,
    });
  });

  PubSub.subscribe(RESET_GAME, () => {
    state = {
      gameMode: null,
      playerOne: null,
      playerTwo: null,
      availableFleet: null,
      currentSetupPlayer: null,
      currentAttacker: null,
      currentOpponent: null,
    };
  });

  function generateFleet() {
    return SHIPS_DATA.flatMap((shipData) => {
      const ships = [];
      for (let i = 0; i < shipData.count; i += 1) {
        ships.push(Ship(shipData));
      }
      return ships;
    });
  }

  function getShip(shipId) {
    if (state.availableFleet === null) {
      return null;
    }
    return state.availableFleet.find((ship) => ship.id === shipId);
  }

  function swapRoles() {
    if (state.currentAttacker === null || state.currentOpponent === null) {
      // Randomly picks an attacker and an opponent
      [state.currentAttacker, state.currentOpponent] = [
        state.playerOne,
        state.playerTwo,
      ].sort(() => (Math.random() > 0.5 ? 1 : -1));
    } else {
      const oldAttacker = state.currentAttacker;
      state.currentAttacker = state.currentOpponent;
      state.currentOpponent = oldAttacker;
    }
    state.currentAttacker.setActive(true);
    state.currentOpponent.setActive(false);
  }

  function generateAttackPhaseData() {
    return {
      gameMode: state.gameMode,
      playerOne: {
        name: state.playerOne.name,
        isBot: state.playerOne.isBot,
        active: state.playerOne.isActive(),
        score: state.playerOne.getScore(),
        gameboard: state.playerOne.gameboard.getGrid(),
        fleet: state.playerOne.gameboard.getFleet(),
      },
      playerTwo: {
        name: state.playerTwo.name,
        isBot: state.playerTwo.isBot,
        active: state.playerTwo.isActive(),
        score: state.playerTwo.getScore(),
        gameboard: state.playerTwo.gameboard.getGrid(),
        fleet: state.playerTwo.gameboard.getFleet(),
      },
    };
  }
}
