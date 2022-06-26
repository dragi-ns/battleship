import {
  coordinatesToCellNumber,
  cellNumberToCoordinates,
  areValidCoordinates,
} from './util';

test('coordinatesToCellNumber should correctly convert coordinates to a cell number', () => {
  expect(coordinatesToCellNumber({ x: 5, y: 2 }, 10)).toBe(25);
});

test('cellNumberToCoordinates should correctly convert a cell number to coordinates', () => {
  expect(cellNumberToCoordinates(25, 10)).toEqual({ x: 5, y: 2 });
});

test('areValidCoordinates should return true for valid coordinates', () => {
  expect(areValidCoordinates({ x: 5, y: 5 }, 10)).toBe(true);
});

test('areValidCoordinates should return false for invalid coordinates', () => {
  expect(areValidCoordinates({ x: 5, y: 5 }, 5)).toBe(false);
});
