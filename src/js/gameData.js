import PubSub from 'pubsub-js';
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
  HIT,
  SUNK,
  MISS,
  FLEET_GONE,
  NEW_ROUND,
  RESET_GAME,
} from './eventTypes';
import Gameboard, { GRID_SIZE, Status } from './gameboard';
import Ship from './ship';
import Player, { isBot } from './player';
import { pipe } from './util';
import SHIPS_DATA from '../data/ships.json';

export const GameMode = Object.freeze({
  VS_FRIEND: 0,
  VS_BOT: 1,
});

export default function GameData() {
  let state = {
    mode: null,
    playerOne: null,
    playerTwo: null,
    availableFleet: null,
    currentSetupPhasePlayer: null,
    currentAttacker: null,
    currentOpponent: null,
  };

  PubSub.subscribe(START_GAME, (_, data) => {
    state.mode = data.mode;
    state.playerOne = {
      ...Player({ name: data.playerOneName }),
      gameboard: Gameboard(),
    };

    let playerTwo = null;
    if (state.mode === GameMode.VS_BOT) {
      playerTwo = pipe(Player, isBot)({ name: data.playerTwoName });
    } else {
      playerTwo = Player({ name: data.playerTwoName });
    }
    state.playerTwo = {
      ...playerTwo,
      gameboard: Gameboard(),
    };

    state.currentSetupPhasePlayer = state.playerOne;

    state.availableFleet = generateFleet();
    PubSub.publish(DISPLAY_SETUP_PHASE, {
      playerName: state.currentSetupPhasePlayer.name,
      gameboard: state.currentSetupPhasePlayer.gameboard.getGrid(),
      fleet: state.availableFleet,
    });
  });

  PubSub.subscribe(CHECK_COORDINATES, (_, data) => {
    const ship = getShip(data.shipId);
    if (!ship) {
      return;
    }

    if (
      state.currentSetupPhasePlayer.gameboard.canPlaceShip(
        data.startCoords,
        data.shipOrientation,
        ship.length,
        data.shipId
      )
    ) {
      PubSub.publish(COORDINATES_FREE, {
        startCoords: data.startCoords,
        shipLength: ship.length,
        shipOrientation: data.shipOrientation,
      });
    }
  });

  PubSub.subscribe(PLACE_SHIP, (_, data) => {
    const ship = getShip(data.shipId);
    if (!ship) {
      return;
    }
    let success = null;
    if (data.oldStartCoords) {
      success = state.currentSetupPhasePlayer.gameboard.moveShip(
        data.oldStartCoords,
        { i: data.startCoords.x, j: data.startCoords.y },
        data.shipOrientation
      );
    } else {
      success = state.currentSetupPhasePlayer.gameboard.placeShip(
        data.startCoords,
        data.shipOrientation,
        ship
      );
    }
    if (success) {
      PubSub.publish(PLACEMENT_VALID, {
        startCoords: data.startCoords,
        shipLength: ship.length,
        shipOrientation: data.shipOrientation,
        shipId: ship.id,
      });
    }
  });

  PubSub.subscribe(PLACE_SHIPS_RANDOM, () => {
    state.currentSetupPhasePlayer.gameboard.placeShipsRandom(
      state.availableFleet
    );
    PubSub.publish(DISPLAY_SETUP_PHASE, {
      playerName: state.currentSetupPhasePlayer.name,
      gameboard: state.currentSetupPhasePlayer.gameboard.getGrid(),
      fleet: state.availableFleet,
      random: true,
    });
  });

  PubSub.subscribe(SETUP_PHASE_NEXT, () => {
    if (
      state.currentSetupPhasePlayer.gameboard.getFleet().length !==
      state.availableFleet.length
    ) {
      PubSub.publish(SETUP_PHASE_INCOMPLETE);
      return;
    }

    state.availableFleet = generateFleet();
    if (state.currentSetupPhasePlayer === state.playerOne) {
      if (state.mode === GameMode.VS_FRIEND) {
        state.currentSetupPhasePlayer = state.playerTwo;
        PubSub.publish(DISPLAY_SETUP_PHASE, {
          playerName: state.currentSetupPhasePlayer.name,
          gameboard: state.currentSetupPhasePlayer.gameboard.getGrid(),
          fleet: state.availableFleet,
        });
        return;
      }
      state.currentSetupPhasePlayer = null;
      state.playerTwo.gameboard.placeShipsRandom(state.availableFleet);
    }
    // Randomly pick an attacker and an opponent
    [state.currentAttacker, state.currentOpponent] = [
      state.playerOne,
      state.playerTwo,
    ].sort(() => (Math.random() > 0.5 ? 1 : -1));
    state.currentAttacker.setActive(true);
    state.currentOpponent.setActive(false);

    PubSub.publish(DISPLAY_ATTACK_PHASE, {
      mode: state.mode,
      playerOne: {
        name: state.playerOne.name,
        isBot: state.playerOne.isBot,
        active: state.playerOne.isActive(),
        score: state.playerOne.getScore(),
        gameboardData: state.playerOne.gameboard.getGrid(),
        fleet: state.playerOne.gameboard.getFleet(),
      },
      playerTwo: {
        name: state.playerTwo.name,
        isBot: state.playerTwo.isBot,
        active: state.playerTwo.isActive(),
        score: state.playerTwo.getScore(),
        gameboardData: state.playerTwo.gameboard.getGrid(),
        fleet: state.playerTwo.gameboard.getFleet(),
      },
    });

    if (state.currentAttacker.isBot) {
      setTimeout(() => {
        const move = state.currentAttacker.getMove(GRID_SIZE);
        PubSub.publish(ATTACK, { coords: move });
      }, 1000);
    }
  });

  PubSub.subscribe(ATTACK, (_, data) => {
    const attack = state.currentOpponent.gameboard.receiveAttack(data.coords);
    if (state.currentAttacker.isBot) {
      state.currentAttacker.lastMoveFeedback(attack, GRID_SIZE);
    }

    if (attack.status === Status.MISS) {
      const oldAttacker = state.currentAttacker;
      state.currentAttacker = state.currentOpponent;
      state.currentOpponent = oldAttacker;
      state.currentAttacker.setActive(true);
      state.currentOpponent.setActive(false);

      PubSub.publish(MISS, {
        coords: data.coords,
        mode: state.mode,
        playerOne: {
          name: state.playerOne.name,
          isBot: state.playerOne.isBot,
          active: state.playerOne.isActive(),
          score: state.playerOne.getScore(),
          gameboardData: state.playerOne.gameboard.getGrid(),
          fleet: state.playerOne.gameboard.getFleet(),
        },
        playerTwo: {
          name: state.playerTwo.name,
          isBot: state.playerTwo.isBot,
          active: state.playerTwo.isActive(),
          score: state.playerTwo.getScore(),
          gameboardData: state.playerTwo.gameboard.getGrid(),
          fleet: state.playerTwo.gameboard.getFleet(),
        },
      });
    } else if (attack.status === Status.HIT) {
      PubSub.publish(HIT, { coords: data.coords });
    } else if (attack.status === Status.SUNK) {
      PubSub.publish(SUNK, {
        shipId: attack.ship.id,
        shipCoords: attack.shipCoords,
        adjacentCoords: attack.adjacentCoords,
      });

      if (state.currentOpponent.gameboard.isFleetSunk()) {
        state.currentAttacker.setScore(state.currentAttacker.getScore() + 1);
        PubSub.publish(FLEET_GONE, {
          winner: state.currentAttacker.name,
          loser: state.currentOpponent.name,
        });
      }
    }

    if (state.currentAttacker.isBot) {
      setTimeout(() => {
        const move = state.currentAttacker.getMove(GRID_SIZE);
        PubSub.publish(ATTACK, { coords: move });
      }, 1000);
    }
  });

  PubSub.subscribe(RESET_GAME, () => {
    state = {
      mode: null,
      playerOne: null,
      playerTwo: null,
      availableFleet: null,
      currentSetupPhasePlayer: null,
      currentAttacker: null,
      currentOpponent: null,
    };
  });

  PubSub.subscribe(NEW_ROUND, () => {
    state.playerOne.gameboard = Gameboard();
    state.playerTwo.gameboard = Gameboard();
    if (state.playerTwo.isBot) {
      state.playerTwo.clearHistory();
    }

    state.currentSetupPhasePlayer = state.playerOne;

    state.availableFleet = generateFleet();
    PubSub.publish(DISPLAY_SETUP_PHASE, {
      playerName: state.currentSetupPhasePlayer.name,
      gameboard: state.currentSetupPhasePlayer.gameboard.getGrid(),
      fleet: state.availableFleet,
    });
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
}
