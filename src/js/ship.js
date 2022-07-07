import { v4 as uuidv4 } from 'uuid';

export default function Ship({ name, length }) {
  const id = uuidv4();
  const positions = Array(length).fill(false);

  function getPositions() {
    return positions.slice(0);
  }

  function hit(position) {
    positions[position] = true;
  }

  function isSunk() {
    return positions.every((position) => position);
  }

  return {
    id,
    name,
    length,
    getPositions,
    hit,
    isSunk,
  };
}
