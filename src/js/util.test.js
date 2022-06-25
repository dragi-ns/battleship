import { coordinatesToCellNumber, cellNumberToCoordinates } from './util';

test('coordinatesToCellNumber should correctly convert coordinates to a cell number', () => {
  expect(coordinatesToCellNumber({ x: 2, y: 5 }, 10)).toBe(25);
});

test('cellNumberToCoordinates should correctly convert a cell number to coordinates', () => {
  expect(cellNumberToCoordinates(25, 10)).toEqual({ x: 2, y: 5 });
});
