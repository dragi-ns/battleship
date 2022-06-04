function Ship({ name, length }) {
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
    name,
    length,
    getPositions,
    hit,
    isSunk,
  };
}

export default Ship;
