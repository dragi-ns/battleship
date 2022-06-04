/* eslint-disable no-prototype-builtins */
import Gameboard, { Orientation } from './gameboard';

test('gameboard object should have a placeShip method', () => {
  expect(Gameboard().hasOwnProperty('placeShip')).toBe(true);
});

test('gameboard placeShip method should correclty place a ship at the specific coordinates (horizontally)', () => {
  const gameboard = Gameboard();
  gameboard.placeShip({ x: 4, y: 4 }, Orientation.HORIZONTAL, {
    name: 'Aircraft Carrier',
    length: 5,
  });
  const grid = gameboard.getGrid();
  expect(grid[4][3]).toBe(null);
  expect(grid[4][4]).not.toBe(null);
  expect(grid[4][5]).not.toBe(null);
  expect(grid[4][6]).not.toBe(null);
  expect(grid[4][7]).not.toBe(null);
  expect(grid[4][8]).not.toBe(null);
  expect(grid[4][9]).toBe(null);
});

test('gameboard placeShip method should correctly place a ship at the specific coordinates (vertically)', () => {
  const gameboard = Gameboard();
  gameboard.placeShip({ x: 0, y: 0 }, Orientation.VERTICAL, {
    name: 'Cruiser',
    length: 3,
  });
  const grid = gameboard.getGrid();
  expect(grid[0][0]).not.toBe(null);
  expect(grid[1][0]).not.toBe(null);
  expect(grid[2][0]).not.toBe(null);
  expect(grid[3][0]).toBe(null);
});

test('gameboard placeShip method should correctly place a ship with a length of 1 at the specific coordinates', () => {
  const gameboard = Gameboard();
  gameboard.placeShip({ x: 9, y: 9 }, Orientation.VERTICAL, {
    name: 'Submarine',
    length: 1,
  });
  const grid = gameboard.getGrid();
  expect(grid[8][8]).toBe(null);
  expect(grid[9][9]).not.toBe(null);
});

test("gameboard placeShip method shouldn't place a ship at the invalid coordinates (invalid start coordinates)", () => {
  const gameboard = Gameboard();
  const ship = gameboard.placeShip({ x: 10, y: 10 }, Orientation.VERTICAL, {
    name: 'Submarine',
    length: 1,
  });
  expect(ship).toBe(null);
});

test("gameboard placeShip method shouldn't place a ship at the invalid coordinates (invalid end coordinates)", () => {
  const gameboard = Gameboard();
  const ship = gameboard.placeShip({ x: 9, y: 9 }, Orientation.VERTICAL, {
    name: 'Battleship',
    length: 4,
  });
  expect(ship).toBe(null);
});

test("gameboard placeShip method shouldn't place a ship on top of the another ship", () => {
  const gameboard = Gameboard();
  gameboard.placeShip({ x: 0, y: 0 }, Orientation.VERTICAL, {
    name: 'Battleship',
    length: 4,
  });
  const ship2 = gameboard.placeShip({ x: 0, y: 0 }, Orientation.HORIZONTAL, {
    name: 'Cruiser',
    length: 3,
  });
  expect(ship2).toBe(null);
});

test("gameboard placeShip method shouldn't place a ship too close to the another ship (they should be at at least one space apart)", () => {
  const gameboard = Gameboard();
  gameboard.placeShip({ x: 0, y: 0 }, Orientation.VERTICAL, {
    name: 'Battleship',
    length: 4,
  });
  const ship2 = gameboard.placeShip({ x: 1, y: 0 }, Orientation.HORIZONTAL, {
    name: 'Cruiser',
    length: 3,
  });
  expect(ship2).toBe(null);
});

test('gameboard object should have a receiveAttack method', () => {
  expect(Gameboard().hasOwnProperty('receiveAttack')).toBe(true);
});

test('gameboard receiveAttack method should return false on miss', () => {
  const gameboard = Gameboard();
  gameboard.placeShip({ x: 0, y: 0 }, Orientation.VERTICAL, {
    name: 'Battleship',
    length: 4,
  });
  expect(gameboard.receiveAttack({ x: 5, y: 5 })).toBe(false);
});

test('gameboard receiveAttack method should return true on hit', () => {
  const gameboard = Gameboard();
  gameboard.placeShip({ x: 0, y: 0 }, Orientation.VERTICAL, {
    name: 'Battleship',
    length: 4,
  });
  expect(gameboard.receiveAttack({ x: 0, y: 3 })).toBe(true);
});

test('gameboard receiveAttack method should call hit function on the correct ship object', () => {
  const gameboard = Gameboard();
  const ship = gameboard.placeShip({ x: 0, y: 0 }, Orientation.VERTICAL, {
    name: 'Battleship',
    length: 4,
  });
  gameboard.receiveAttack({ x: 0, y: 1 });
  expect(ship.getPositions()[1]).toBe(true);
});

test('gameboard receiveAttack method should record missed shots', () => {
  const gameboard = Gameboard();
  gameboard.placeShip({ x: 0, y: 0 }, Orientation.VERTICAL, {
    name: 'Battleship',
    length: 4,
  });
  gameboard.receiveAttack({ x: 5, y: 5 });
  const grid = gameboard.getGrid();
  expect(grid[5][5]).toBe(false);
});

test('gameboard should have isFleetGone method', () => {
  expect(Gameboard().hasOwnProperty('isFleetGone')).toBe(true);
});

test('gameboard isFleetGone method should detect if all ships have been sunk', () => {
  const gameboard = Gameboard();
  gameboard.placeShip({ x: 0, y: 0 }, Orientation.VERTICAL, {
    name: 'Submarine',
    length: 1,
  });
  gameboard.placeShip({ x: 9, y: 9 }, Orientation.VERTICAL, {
    name: 'Submarine',
    length: 1,
  });
  gameboard.receiveAttack({ x: 0, y: 0 });
  expect(gameboard.isFleetGone()).toBe(false);

  gameboard.receiveAttack({ x: 9, y: 9 });
  expect(gameboard.isFleetGone()).toBe(true);
});
