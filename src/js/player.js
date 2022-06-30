import { areValidCoordinates, getRandomInt } from './util';
import { Status } from './gameboard';

export default function Player({ name }) {
  return {
    isBot: false,
    name,
  };
}

export function isBot(player) {
  const playedMoves = [];
  let hitCount = 0;
  let initialHitMove = null;
  let possibleMoves = [];

  function noMoreVariations(gridSize) {
    return gridSize * gridSize <= playedMoves.length;
  }

  function alreadyPlayed(move) {
    return playedMoves.find(({ x, y }) => x === move.x && y === move.y);
  }

  function getRandomMove(gridSize) {
    const move = {
      x: getRandomInt(gridSize),
      y: getRandomInt(gridSize),
    };
    if (!alreadyPlayed(move)) {
      return move;
    }
    return getRandomMove(gridSize);
  }

  function getMove(gridSize) {
    if (noMoreVariations(gridSize)) {
      return { x: null, y: null };
    }

    let move;
    if (possibleMoves.length > 0) {
      [move] = possibleMoves.splice(getRandomInt(possibleMoves.length), 1);
    } else {
      move = getRandomMove(gridSize);
    }
    playedMoves.push(move);
    return move;
  }

  function generateUpDirection(move) {
    return { x: move.x, y: move.y - 1, direction: 'up' };
  }

  function generateDownDirection(move) {
    return { x: move.x, y: move.y + 1, direction: 'down' };
  }

  function generateLeftDirection(move) {
    return { x: move.x - 1, y: move.y, direction: 'left' };
  }

  function generateRightDirection(move) {
    return { x: move.x + 1, y: move.y, direction: 'right' };
  }

  function generatePossibleMoves(move, gridSize, reset = false) {
    if (!move.direction) {
      const up = generateUpDirection(move);
      if (areValidCoordinates(up, gridSize) && !alreadyPlayed(up)) {
        possibleMoves.push(up);
      }

      const down = generateDownDirection(move);
      if (areValidCoordinates(down, gridSize) && !alreadyPlayed(down)) {
        possibleMoves.push(down);
      }

      const left = generateLeftDirection(move);
      if (areValidCoordinates(left, gridSize) && !alreadyPlayed(left)) {
        possibleMoves.push(left);
      }

      const right = generateRightDirection(move);
      if (areValidCoordinates(right, gridSize) && !alreadyPlayed(right)) {
        possibleMoves.push(right);
      }

      return;
    }

    if (!reset) {
      if (move.direction === 'up') {
        const up = generateUpDirection(move);
        if (areValidCoordinates(up, gridSize) && !alreadyPlayed(up)) {
          possibleMoves.push(up);
        }
      } else if (move.direction === 'down') {
        const down = generateDownDirection(move);
        if (areValidCoordinates(down, gridSize) && !alreadyPlayed(down)) {
          possibleMoves.push(down);
        }
      } else if (move.direction === 'left') {
        const left = generateLeftDirection(move);
        if (areValidCoordinates(left, gridSize) && !alreadyPlayed(left)) {
          possibleMoves.push(left);
        }
      } else if (move.direction === 'right') {
        const right = generateRightDirection(move);
        if (areValidCoordinates(right, gridSize) && !alreadyPlayed(right)) {
          possibleMoves.push(right);
        }
      }
    }

    if (possibleMoves.length === 0) {
      if (move.direction === 'up') {
        possibleMoves.push(generateDownDirection(initialHitMove));
      } else if (move.direction === 'down') {
        possibleMoves.push(generateUpDirection(initialHitMove));
      } else if (move.direction === 'left') {
        possibleMoves.push(generateRightDirection(initialHitMove));
      } else if (move.direction === 'right') {
        possibleMoves.push(generateLeftDirection(initialHitMove));
      }
    }
  }

  function lastMoveFeedback(attack, gridSize) {
    const lastMove = playedMoves[playedMoves.length - 1];
    if (attack.status === Status.MISS) {
      if (hitCount > 1) {
        possibleMoves = [];
        const lastHitMove = playedMoves[playedMoves.length - 2];
        generatePossibleMoves(lastHitMove, gridSize, true);
      }
    } else if (attack.status === Status.HIT) {
      hitCount += 1;
      if (hitCount === 1) {
        initialHitMove = lastMove;
      } else {
        possibleMoves = [];
      }
      generatePossibleMoves(lastMove, gridSize);
    } else if (attack.status === Status.SUNK) {
      hitCount = 0;
      possibleMoves = [];
      initialHitMove = null;
      attack.adjacentCoords.forEach((coord) => {
        if (!alreadyPlayed(coord)) {
          playedMoves.push(coord);
        }
      });
    }
  }

  return {
    ...player,
    isBot: true,
    getMove,
    lastMoveFeedback,
  };
}
