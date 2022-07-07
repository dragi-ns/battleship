import Ship from './ship';

describe('ship public api', () => {
  let ship = null;
  beforeEach(() => {
    ship = Ship({ name: 'Ship 4', length: 4 });
  });

  test('ship object public api', () => {
    expect(Object.keys(ship)).toEqual([
      'id',
      'name',
      'length',
      'getPositions',
      'hit',
      'isSunk',
    ]);
  });

  test('should have a correct name value', () => {
    expect(ship.name).toBe('Ship 4');
  });

  test('should have a correct length value', () => {
    expect(ship.length).toBe(4);
  });

  test('should generate positions array based on the length value', () => {
    expect(ship.getPositions().length).toBe(4);
  });

  test('hit should mark a position as "hit"', () => {
    ship.hit(2);
    expect(ship.getPositions()[2]).toBe(true);
  });

  test('sunk should return false if not all positions are hit', () => {
    ship.hit(2);
    ship.hit(0);
    expect(ship.isSunk()).toBe(false);
  });

  test('sunk should return true if all positions are hit', () => {
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    ship.hit(3);
    expect(ship.isSunk()).toBe(true);
  });
});
