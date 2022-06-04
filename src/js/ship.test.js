/* eslint-disable no-prototype-builtins */
import Ship from './ship';

test('ship object should have a name property', () => {
  expect(Ship({}).hasOwnProperty('name')).toBe(true);
});

test('ship object should have the correct name property value', () => {
  expect(Ship({ name: 'Battleship' }).name).toBe('Battleship');
});

test('ship object should have a length property', () => {
  expect(Ship({}).hasOwnProperty('length')).toBe(true);
});

test('ship object should have the correct length property value', () => {
  expect(Ship({ length: 5 }).length).toBe(5);
});

test('ship object should have a getPositions method', () => {
  expect(Ship({}).hasOwnProperty('getPositions')).toBe(true);
});

test('ship object should generate positions based on a ship length', () => {
  expect(Ship({ length: 3 }).getPositions().length).toBe(3);
});

test('ship object should have a hit method', () => {
  expect(Ship({}).hasOwnProperty('hit')).toBe(true);
});

test('ship hit method should mark position as "hit"', () => {
  const ship = Ship({ length: 4 });
  ship.hit(2);
  expect(ship.getPositions()[2]).toBe(true);
});

test('ship object should have an isSunk method', () => {
  expect(Ship({}).hasOwnProperty('isSunk')).toBe(true);
});

test('ship isSunk method should report false if not all positions are hit', () => {
  expect(Ship({ length: 2 }).isSunk()).toBe(false);
});

test('ship isSunk method should report true if all positions are hit', () => {
  const ship = Ship({ length: 2 });
  ship.hit(0);
  ship.hit(1);
  expect(ship.isSunk()).toBe(true);
});
