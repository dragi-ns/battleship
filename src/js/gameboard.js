/* eslint-disable no-continue */
import {
  getRandomCoordinates,
  getRandomInt,
  areValidCoordinates,
} from './util';

export const GRID_SIZE = 10;

export const Orientation = Object.freeze({
  HORIZONTAL: 0,
  VERTICAL: 1,
});

export const Status = Object.freeze({
  EMPTY: 0,
  BUSY: 1,
  MISS: 2,
  HIT: 3,
  SUNK: 4,
});

export default function Gameboard() {
  const ships = new Set();

  function buildGrid() {
    const grid = [];
    for (let row = 0; row < GRID_SIZE; row += 1) {
      grid.push([]);
      for (let column = 0; column < GRID_SIZE; column += 1) {
        grid[row][column] = { status: Status.EMPTY };
      }
    }
    return grid;
  }

  const grid = buildGrid();

  function getGrid() {
    return grid.map((rows) => rows.slice(0));
  }

  function getCellData({ x, y }) {
    if (!areValidCoordinates({ x, y }, GRID_SIZE)) {
      return null;
    }
    return grid[y][x];
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

  function getShipSpace({ x, y, x2, y2 }, adjacent = true) {
    const coordinates = [];
    const addInt = +adjacent;
    for (let row = y - addInt; row <= y2 + addInt; row += 1) {
      if (row < 0 || row >= GRID_SIZE) {
        continue;
      }
      for (let column = x - addInt; column <= x2 + addInt; column += 1) {
        if (column < 0 || column >= GRID_SIZE) {
          continue;
        }
        coordinates.push({ x: column, y: row });
      }
    }
    return coordinates;
  }

  function isSpaceFree({ x, y, x2, y2 }, ship = null) {
    const coordinates = getShipSpace({ x, y, x2, y2 });
    return coordinates.every((coordinate) => {
      const cell = grid[coordinate.y][coordinate.x];
      return (
        cell.status === Status.EMPTY ||
        (ship && cell.status === Status.BUSY && cell.ship === ship)
      );
    });
  }

  function canPlaceShip({ x, y }, orientation, shipLength, ship = null) {
    if (!areValidCoordinates({ x, y }, GRID_SIZE)) {
      return false;
    }
    const { x2, y2 } = calculateEndCoordinates(
      { x, y },
      orientation,
      shipLength
    );
    if (
      !areValidCoordinates({ x: x2, y: y2 }, GRID_SIZE) ||
      !isSpaceFree({ x, y, x2, y2 }, ship)
    ) {
      return false;
    }

    return true;
  }

  function placeShip({ x, y }, orientation, ship) {
    if (!canPlaceShip({ x, y }, orientation, ship.length)) {
      return null;
    }
    const { x2, y2 } = calculateEndCoordinates(
      { x, y },
      orientation,
      ship.length
    );

    let position = 0;
    for (let row = y; row <= y2; row += 1) {
      for (let column = x; column <= x2; column += 1) {
        grid[row][column] = {
          ship,
          x,
          y,
          x2,
          y2,
          orientation,
          position,
          status: Status.BUSY,
        };
        position += 1;
      }
    }
    ships.add(ship);
    return ship;
  }

  function placeShipsRandom(shipsData) {
    shipsData.forEach((shipData) => {
      for (let i = 0; i < shipData.count; i += 1) {
        for (;;) {
          const coodrindates = getRandomCoordinates(GRID_SIZE);
          const orientation = Object.values(Orientation)[getRandomInt(2)];
          if (placeShip(coodrindates, orientation, shipsData)) {
            break;
          }
        }
      }
    });
  }

  function moveShip({ x, y }, { i, j }, orientation = null) {
    const cellData = getCellData({ x, y });
    if (!cellData || cellData.status === Status.EMPTY) {
      return null;
    }
    if (
      !canPlaceShip(
        { x: i, y: j },
        orientation ?? cellData.orientation,
        cellData.ship.length,
        cellData.ship
      )
    ) {
      return null;
    }
    const coords = getShipSpace(cellData, false);
    coords.forEach((coord) => {
      grid[coord.y][coord.x] = { status: Status.EMPTY };
    });
    return placeShip(
      { x: i, y: j },
      orientation ?? cellData.orientation,
      cellData.ship
    );
  }

  function receiveAttack({ x, y }) {
    if (!areValidCoordinates({ x, y }, GRID_SIZE)) {
      return null;
    }

    const cell = grid[y][x];
    if (cell.status === Status.EMPTY) {
      cell.status = Status.MISS;
      return { status: Status.MISS };
    }

    if (cell.status === Status.BUSY) {
      const { ship } = cell;
      ship.hit(cell.position);
      if (cell.ship.isSunk()) {
        const coordinates = getShipSpace(cell);
        const shipCoords = coordinates.filter((coord) => {
          const shipCell = grid[coord.y][coord.x];
          if (
            shipCell.status === Status.BUSY ||
            shipCell.status === Status.HIT
          ) {
            shipCell.status = Status.SUNK;
            return true;
          }
          return false;
        });
        const adjacentCoords = coordinates.filter((coord) => {
          const adjacentCell = grid[coord.y][coord.x];
          if (adjacentCell.status !== Status.SUNK) {
            adjacentCell.status = Status.MISS;
            return true;
          }
          return false;
        });
        return {
          shipName: ship.name,
          status: Status.SUNK,
          shipCoords,
          adjacentCoords,
        };
      }
      return { status: Status.HIT };
    }

    return null;
  }

  function isFleetSunk() {
    // eslint-disable-next-line no-restricted-syntax
    for (const ship of ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  }

  return {
    getGrid,
    getCellData,
    canPlaceShip,
    placeShip,
    placeShipsRandom,
    moveShip,
    receiveAttack,
    isFleetSunk,
  };
}
