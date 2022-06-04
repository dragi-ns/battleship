/* eslint-disable no-continue */
import Ship from './ship';

export const Orientation = Object.freeze({
  HORIZONTAL: 0,
  VERTICAL: 1,
});

function Gameboard() {
  const GRID_SIZE = 10;

  const ships = [];

  function buildGrid() {
    const grid = [];
    for (let row = 0; row < GRID_SIZE; row += 1) {
      grid.push([]);
      for (let column = 0; column < GRID_SIZE; column += 1) {
        grid[row][column] = null;
      }
    }
    return grid;
  }

  const grid = buildGrid();

  function getGrid() {
    return grid.map((rows) => rows.slice(0));
  }

  function areValidCoordinates({ x, y }) {
    return x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE;
  }

  function calculateEndCoordinates({ x, y }, orientation, shipLength) {
    let x2 = x;
    let y2 = y;
    if (orientation === Orientation.HORIZONTAL) {
      x2 += shipLength - 1;
    } else {
      y2 += shipLength - 1;
    }
    return { x2, y2 };
  }

  function isSpaceFree({ x, y, x2, y2 }) {
    for (let row = y - 1; row <= y2 + 1; row += 1) {
      if (row < 0 || row >= GRID_SIZE) {
        continue;
      }
      for (let column = x - 1; column <= x2 + 1; column += 1) {
        if (column < 0 || column >= GRID_SIZE) {
          continue;
        }
        if (grid[row][column] !== null) {
          return false;
        }
      }
    }
    return true;
  }

  function placeShip({ x, y }, orientation, shipData) {
    if (!areValidCoordinates({ x, y })) {
      return null;
    }

    const { x2, y2 } = calculateEndCoordinates(
      { x, y },
      orientation,
      shipData.length
    );
    if (
      !areValidCoordinates({ x: x2, y: y2 }) ||
      !isSpaceFree({ x, y, x2, y2 })
    ) {
      return null;
    }

    const ship = Ship(shipData);
    ships.push(ship);

    let position = 0;
    for (let row = y; row <= y2; row += 1) {
      for (let column = x; column <= x2; column += 1) {
        grid[row][column] = {
          ship,
          x,
          y,
          x2,
          y2,
          position,
        };
        position += 1;
      }
    }
    return ship;
  }

  function receiveAttack({ x, y }) {
    const cell = grid[y][x];
    if (cell) {
      cell.ship.hit(cell.position);
      return true;
    }
    grid[y][x] = false;
    return false;
  }

  function isFleetGone() {
    return ships.every((ship) => ship.isSunk());
  }

  return {
    getGrid,
    placeShip,
    receiveAttack,
    isFleetGone,
  };
}

export default Gameboard;
