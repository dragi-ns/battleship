export function pipe(...fns) {
  return (initialArgument) =>
    fns.reduce((currentArgument, fun) => fun(currentArgument), initialArgument);
}

export function getRandomInt(maxInt) {
  return Math.floor(Math.random() * maxInt);
}

export function coordinatesToCellNumber({ x, y }, gridSize) {
  return x * gridSize + y;
}

export function cellNumberToCoordinates(cellNumber, gridSize) {
  return {
    // https://stackoverflow.com/a/5494983
    x: Math.floor(cellNumber / gridSize),
    y: cellNumber % gridSize,
  };
}
