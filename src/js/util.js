export function pipe(...fns) {
  return (initialArgument) =>
    fns.reduce((currentArgument, fun) => fun(currentArgument), initialArgument);
}

export function getRandomInt(maxInt) {
  return Math.floor(Math.random() * maxInt);
}

export function getRandomCoordinates(gridSize) {
  return {
    x: getRandomInt(gridSize),
    y: getRandomInt(gridSize),
  };
}

export function areValidCoordinates({ x, y }, gridSize) {
  return x >= 0 && x < gridSize && y >= 0 && y < gridSize;
}

export function coordinatesToCellNumber({ x, y }, gridSize) {
  return y * gridSize + x;
}

export function cellNumberToCoordinates(cellNumber, gridSize) {
  return {
    // https://stackoverflow.com/a/5494983
    x: cellNumber % gridSize,
    y: Math.floor(cellNumber / gridSize),
  };
}
