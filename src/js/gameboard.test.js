import Gameboard, { Status, GRID_SIZE, Orientation } from './gameboard';
import Ship from './ship';

let gameboard = null;

beforeEach(() => {
  gameboard = Gameboard();
});

describe('gameboard public api', () => {
  test('gameboard object public api', () => {
    expect(Object.keys(gameboard)).toEqual([
      'getGrid',
      'getCellData',
      'getFleet',
      'canPlaceShip',
      'placeShip',
      'placeShipsRandom',
      'moveShip',
      'rotateShip',
      'receiveAttack',
      'isFleetSunk',
    ]);
  });
});

describe('gameboard getGrid', () => {
  test('should return flat array based on the GRID_SIZE', () => {
    const grid = gameboard.getGrid();
    expect(grid.length).toBe(GRID_SIZE * GRID_SIZE);
  });

  test('should return 2d array based on the GRID_SIZE', () => {
    const grid = gameboard.getGrid(true);
    expect(grid.length).toBe(GRID_SIZE);
    expect(grid[0].length).toBe(GRID_SIZE);
  });
});

describe('gameboard getCellData', () => {
  test('should return the null for an invalid coordinates', () => {
    expect(gameboard.getCellData({ x: 15, y: 20 })).toBe(null);
  });

  test('should return a correct cell data', () => {
    expect(gameboard.getCellData({ x: 0, y: 0 })).toEqual({
      status: Status.EMPTY,
    });
  });
});

describe('gameboard getFleet', () => {
  test('should return an empty array if there are no ships on the gameboard', () => {
    expect(gameboard.getFleet().length).toBe(0);
  });

  test('should return an array of ships that are currently on the gameboard', () => {
    const ship = gameboard.placeShip(
      { x: 0, y: 0 },
      Orientation.HORIZONTAL,
      Ship({
        name: 'Aircraft Carrier',
        length: 5,
      })
    );
    const ship2 = gameboard.placeShip(
      { x: 9, y: 9 },
      Orientation.HORIZONTAL,
      Ship({
        name: 'Submarine',
        length: 1,
      })
    );
    expect(gameboard.getFleet()).toEqual([ship, ship2]);
  });
});

describe('gameboard canPlaceShip', () => {
  test('should return true if there is enough room to place a ship horizontally', () => {
    const isEnoughRoom = gameboard.canPlaceShip(
      { x: 0, y: 0 },
      Orientation.HORIZONTAL,
      5
    );
    expect(isEnoughRoom).toBe(true);
  });

  test('should return true if there is enough room to place a ship vertically', () => {
    const isEnoughRoom = gameboard.canPlaceShip(
      { x: 0, y: 0 },
      Orientation.VERTICAL,
      5
    );
    expect(isEnoughRoom).toBe(true);
  });

  test('should return false for invalid start coordinates', () => {
    const isEnoughRoom = gameboard.canPlaceShip(
      { x: 11, y: 15 },
      Orientation.VERTICAL,
      5
    );
    expect(isEnoughRoom).toBe(false);
  });

  test('should return false for invalid end coordinates', () => {
    const isEnoughRoom = gameboard.canPlaceShip(
      { x: 8, y: 8 },
      Orientation.VERTICAL,
      5
    );
    expect(isEnoughRoom).toBe(false);
  });

  test('should return false if ships are overlapping', () => {
    gameboard.placeShip(
      { x: 0, y: 0 },
      Orientation.HORIZONTAL,
      Ship({
        name: 'Aircraft Carrier',
        length: 5,
      })
    );
    const isEnoughRoom = gameboard.canPlaceShip(
      { x: 3, y: 1 },
      Orientation.VERTICAL,
      4
    );
    expect(isEnoughRoom).toBe(false);
  });

  test('should return false if there is not at least one square space between ships', () => {
    gameboard.placeShip(
      { x: 0, y: 0 },
      Orientation.HORIZONTAL,
      Ship({
        name: 'Aircraft Carrier',
        length: 5,
      })
    );
    const isEnoughRoom = gameboard.canPlaceShip(
      { x: 5, y: 1 },
      Orientation.VERTICAL,
      4
    );
    expect(isEnoughRoom).toBe(false);
  });

  test('should return true if there is at least one square space between ships', () => {
    gameboard.placeShip(
      { x: 0, y: 0 },
      Orientation.HORIZONTAL,
      Ship({
        name: 'Aircraft Carrier',
        length: 5,
      })
    );
    const isEnoughRoom = gameboard.canPlaceShip(
      { x: 6, y: 1 },
      Orientation.VERTICAL,
      4
    );
    expect(isEnoughRoom).toBe(true);
  });

  test('should ignore area of a ship that is passed', () => {
    const ship = gameboard.placeShip(
      { x: 0, y: 0 },
      Orientation.HORIZONTAL,
      Ship({
        name: 'Aircraft Carrier',
        length: 5,
      })
    );
    const isEnoughRoom = gameboard.canPlaceShip(
      { x: 0, y: 0 },
      Orientation.VERTICAL,
      5,
      ship.id
    );
    expect(isEnoughRoom).toBe(true);
  });
});

describe('gameboard placeShip', () => {
  test('should correctly place a ship at the specific coordinates horizontally', () => {
    const ship = gameboard.placeShip(
      { x: 0, y: 0 },
      Orientation.HORIZONTAL,
      Ship({
        name: 'Aircraft Carrier',
        length: 5,
      })
    );
    const grid = gameboard.getGrid(true);
    expect(
      grid[0]
        .slice(0, 5)
        .every((cell) => cell.status === Status.BUSY && cell.ship === ship)
    ).toBe(true);
  });

  test('should correctly place a ship at the specific coordinates vertically', () => {
    const ship = gameboard.placeShip(
      { x: 0, y: 0 },
      Orientation.VERTICAL,
      Ship({
        name: 'Aircraft Carrier',
        length: 5,
      })
    );
    const grid = gameboard.getGrid(true);
    expect(
      grid
        .slice(0, 5)
        .every((row) => row[0].status === Status.BUSY && row[0].ship === ship)
    ).toBe(true);
  });

  test('should return null if it cannot place a ship at the specific coordinates', () => {
    const ship = gameboard.placeShip(
      { x: 8, y: 8 },
      Orientation.VERTICAL,
      Ship({
        name: 'Aircraft Carrier',
        length: 5,
      })
    );
    expect(ship).toBe(null);
  });
});

describe('gameboard moveShip', () => {
  test('should move a ship', () => {
    const ship = Ship({
      name: 'Submarine',
      length: 1,
    });
    gameboard.placeShip({ x: 0, y: 0 }, Orientation.VERTICAL, ship);
    gameboard.moveShip({ x: 0, y: 0 }, { i: 9, j: 9 });
    const grid = gameboard.getGrid(true);
    expect(grid[0][0].status).toBe(Status.EMPTY);
    expect(grid[9][9].status).toBe(Status.BUSY);
    expect(grid[9][9].ship).toEqual(ship);
  });

  test('should rotate a ship based on the orientation', () => {
    const ship = Ship({
      name: 'Aircraft Carrier',
      length: 5,
    });
    gameboard.placeShip({ x: 0, y: 0 }, Orientation.HORIZONTAL, ship);
    gameboard.moveShip({ x: 0, y: 0 }, { i: 0, j: 0 }, Orientation.VERTICAL);
    const grid = gameboard.getGrid(true);
    expect(
      grid[0].slice(1, 5).every((cell) => cell.status === Status.EMPTY)
    ).toBe(true);
    expect(
      grid
        .slice(0, 5)
        .every((row) => row[0].status === Status.BUSY && row[0].ship === ship)
    ).toBe(true);
  });
});

describe('gameboard rotateShip', () => {
  test('should rotate a ship', () => {
    const ship = Ship({
      name: 'Aircraft Carrier',
      length: 5,
    });
    gameboard.placeShip({ x: 0, y: 0 }, Orientation.HORIZONTAL, ship);
    gameboard.rotateShip({ x: 0, y: 0 });
    const grid = gameboard.getGrid(true);
    expect(
      grid[0].slice(1, 5).every((cell) => cell.status === Status.EMPTY)
    ).toBe(true);
    expect(
      grid
        .slice(0, 5)
        .every((row) => row[0].status === Status.BUSY && row[0].ship === ship)
    ).toBe(true);
  });

  test('should not rotate a ship if there is not enough space', () => {
    const ship = Ship({
      name: 'Aircraft Carrier',
      length: 5,
    });
    gameboard.placeShip({ x: 9, y: 0 }, Orientation.VERTICAL, ship);
    gameboard.rotateShip({ x: 9, y: 0 });
    const grid = gameboard.getGrid(true);
    expect(
      grid
        .slice(0, 5)
        .every((row) => row[9].status === Status.BUSY && row[9].ship === ship)
    ).toBe(true);

    expect(
      grid[0].slice(5, 9).every((cell) => cell.status === Status.EMPTY)
    ).toBe(true);
  });
});

describe('gameboard receiveAttack', () => {
  test('should return null for an invalid coordinates', () => {
    const attack = gameboard.receiveAttack({ x: 11, y: 15 });
    expect(attack).toBe(null);
  });

  test('should return a "miss" status for an empty coordinates', () => {
    const attack = gameboard.receiveAttack({ x: 0, y: 0 });
    expect(attack.status).toBe(Status.MISS);
  });

  test('should return a "hit" status for a busy coordinates', () => {
    gameboard.placeShip(
      { x: 0, y: 0 },
      Orientation.VERTICAL,
      Ship({
        name: 'Aircraft Carrier',
        length: 5,
      })
    );
    const attack = gameboard.receiveAttack({ x: 0, y: 0 });
    expect(attack.status).toBe(Status.HIT);
  });

  test('should return a "sunk" status when all the ship cells are hit', () => {
    const ship = gameboard.placeShip(
      { x: 0, y: 0 },
      Orientation.VERTICAL,
      Ship({
        name: 'Submarine',
        length: 1,
      })
    );
    const attack = gameboard.receiveAttack({ x: 0, y: 0 });
    expect(attack).toEqual({
      ship,
      status: Status.SUNK,
      shipCoords: [{ x: 0, y: 0 }],
      adjacentCoords: [
        { x: 1, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 1 },
      ],
    });
  });

  test('should mark adjacent cells as "miss" when a ship is sunk', () => {
    gameboard.placeShip(
      { x: 0, y: 0 },
      Orientation.VERTICAL,
      Ship({
        name: 'Submarine',
        length: 1,
      })
    );
    const attack = gameboard.receiveAttack({ x: 0, y: 0 });
    expect(attack.status).toBe(Status.SUNK);
    const grid = gameboard.getGrid(true);
    expect(grid[0][1].status).toBe(Status.MISS);
    expect(grid[1][0].status).toBe(Status.MISS);
    expect(grid[1][1].status).toBe(Status.MISS);
  });

  test('hiting the same coordinates more than once should return null', () => {
    let attack = gameboard.receiveAttack({ x: 0, y: 0 });
    expect(attack.status).toBe(Status.MISS);
    attack = gameboard.receiveAttack({ x: 0, y: 0 });
    expect(attack).toBe(null);
  });

  test('should call hit function on the correct ship object', () => {
    const ship = gameboard.placeShip(
      { x: 0, y: 0 },
      Orientation.VERTICAL,
      Ship({
        name: 'Battleship',
        length: 4,
      })
    );
    gameboard.receiveAttack({ x: 0, y: 1 });
    expect(ship.getPositions()[1]).toBe(true);
  });
});

describe('gameboard isFleetSunk', () => {
  test('should return false if at leaste one ship is not sunk', () => {
    gameboard.placeShip(
      { x: 0, y: 0 },
      Orientation.VERTICAL,
      Ship({
        name: 'Submarine',
        length: 1,
      })
    );
    gameboard.placeShip(
      { x: 9, y: 9 },
      Orientation.VERTICAL,
      Ship({
        name: 'Submarine',
        length: 1,
      })
    );
    gameboard.receiveAttack({ x: 0, y: 0 });
    expect(gameboard.isFleetSunk()).toBe(false);
  });

  test('should return true all ships are sunk', () => {
    gameboard.placeShip(
      { x: 0, y: 0 },
      Orientation.VERTICAL,
      Ship({
        name: 'Submarine',
        length: 1,
      })
    );
    gameboard.placeShip(
      { x: 9, y: 9 },
      Orientation.VERTICAL,
      Ship({
        name: 'Submarine',
        length: 1,
      })
    );
    gameboard.receiveAttack({ x: 0, y: 0 });
    gameboard.receiveAttack({ x: 9, y: 9 });
    expect(gameboard.isFleetSunk()).toBe(true);
  });
});
