import { getRandomInt } from './util';

export default function Player({ name }) {
  return {
    name,
  };
}

export function isBot(player) {
  const moves = [];

  function noMoreVariations(gridSize) {
    return gridSize * gridSize <= moves.length;
  }

  function getRandomMove(gridSize) {
    const move = {
      x: getRandomInt(gridSize),
      y: getRandomInt(gridSize),
    };
    if (!moves.find(({ x, y }) => x === move.x && y === move.y)) {
      return move;
    }
    return getRandomMove(gridSize);
  }

  function getMove(gridSize) {
    if (noMoreVariations(gridSize)) {
      return { x: null, y: null };
    }
    const move = getRandomMove(gridSize);
    moves.push(move);
    return move;
  }

  return {
    getMove,
    ...player,
  };
}
