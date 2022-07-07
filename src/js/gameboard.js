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
  let grid = buildGrid();
  const fleet = new Set();

  function buildGrid() {
    const newGrid = [];
    for (let row = 0; row < GRID_SIZE; row += 1) {
      newGrid.push([]);
      for (let column = 0; column < GRID_SIZE; column += 1) {
        newGrid[row][column] = { status: Status.EMPTY };
      }
    }
    return newGrid;
  }

  function getGrid(multidimensional = false) {
    const gridCopy = grid.map((rows) => rows.slice(0));
    if (multidimensional) {
      return gridCopy;
    }
    return gridCopy.flat();
  }

  function getCellData({ x, y }) {
    if (!areValidCoordinates({ x, y }, GRID_SIZE)) {
      return null;
    }
    return grid[y][x];
  }

  function getFleet() {
    return Array.from(fleet);
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

  function isSpaceFree({ x, y, x2, y2 }, shipId = null) {
    const coordinates = getShipSpace({ x, y, x2, y2 });
    return coordinates.every((coordinate) => {
      const cell = grid[coordinate.y][coordinate.x];
      return (
        cell.status === Status.EMPTY ||
        (shipId && cell.status === Status.BUSY && cell.ship.id === shipId)
      );
    });
  }

  function canPlaceShip({ x, y }, orientation, shipLength, shipId = null) {
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
      !isSpaceFree({ x, y, x2, y2 }, shipId)
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
    fleet.add(ship);
    return ship;
  }

  function placeShipsRandom(newFleet) {
    grid = buildGrid();
    fleet.clear();
    newFleet.forEach((ship) => {
      for (;;) {
        const coordinates = getRandomCoordinates(GRID_SIZE);
        const orientation = Object.values(Orientation)[getRandomInt(2)];
        if (placeShip(coordinates, orientation, ship)) {
          break;
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
        cellData.ship.id
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

  function rotateShip({ x, y }) {
    const cellData = getCellData({ x, y });
    const orientation =
      cellData.orientation === Orientation.HORIZONTAL
        ? Orientation.VERTICAL
        : Orientation.HORIZONTAL;
    return moveShip({ x, y }, { i: x, j: y }, orientation);
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
      if (ship.isSunk()) {
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
          ship,
          status: Status.SUNK,
          shipCoords,
          adjacentCoords,
        };
      }
      cell.status = Status.HIT;
      return { status: Status.HIT };
    }

    return null;
  }

  function isFleetSunk() {
    // eslint-disable-next-line no-restricted-syntax
    for (const ship of fleet) {
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  }

  return {
    getGrid,
    getCellData,
    getFleet,
    canPlaceShip,
    placeShip,
    placeShipsRandom,
    moveShip,
    rotateShip,
    receiveAttack,
    isFleetSunk,
  };
}
