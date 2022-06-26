/* eslint-disable no-prototype-builtins */
import Player, { isBot } from './player';
import { pipe } from './util';

test('player object should have a name property', () => {
  expect(Player({}).hasOwnProperty('name')).toBe(true);
});

test('player object should have the correct name property value', () => {
  expect(Player({ name: 'Jeff' }).name).toBe('Jeff');
});

test('player is not a bot', () => {
  expect(Player({ name: 'Jeff' }).isBot).toBe(false);
});

test('bot is a bot', () => {
  expect(pipe(Player, isBot)({ name: 'Jeff' }).isBot).toBe(true);
});

test('player bot object should have the getMove method', () => {
  const bot = pipe(Player, isBot)({ name: 'Jabotium' });
  expect(bot.hasOwnProperty('getMove')).toBe(true);
});

test('player bot getMove method should generate a valid coordinates', () => {
  const bot = pipe(Player, isBot)({ name: 'Jabotium' });
  const { x, y } = bot.getMove(2);
  expect(x).toBeGreaterThanOrEqual(0);
  expect(x).toBeLessThan(2);
  expect(y).toBeGreaterThanOrEqual(0);
  expect(y).toBeLessThan(2);
});

test("player bot getMove method shouldn't generate same coordintes twice", () => {
  const bot = pipe(Player, isBot)({ name: 'Jabotium' });
  const move = bot.getMove(2);
  const move2 = bot.getMove(2);
  expect(move).not.toEqual(move2);
});

test('player bot getMove method should return null when there is no more variations', () => {
  const bot = pipe(Player, isBot)({ name: 'Jabotium' });
  bot.getMove(1);
  const move = bot.getMove(1);
  expect(move).toEqual({ x: null, y: null });
});

test('player bot should make a smarter decision based on the last move feedback', () => {
  const bot = pipe(Player, isBot)({ name: 'Jabotium' });
  const initialHitMove = bot.getMove(5);
  bot.lastMoveFeedback({ status: 'hit' });
  bot.getMove(5);
  bot.lastMoveFeedback({ status: 'hit' });
  const missMove = bot.getMove(5);
  bot.lastMoveFeedback({ status: 'miss' });
  const newMove = bot.getMove(5);

  if (missMove.direction === 'up') {
    expect(newMove).toEqual({
      x: initialHitMove.x,
      y: initialHitMove.y + 1,
      direction: 'down',
    });
  } else if (missMove.direction === 'down') {
    expect(newMove).toEqual({
      x: initialHitMove.x,
      y: initialHitMove.y - 1,
      direction: 'up',
    });
  } else if (missMove.direction === 'left') {
    expect(newMove).toEqual({
      x: initialHitMove.x + 1,
      y: initialHitMove.y,
      direction: 'right',
    });
  } else if (missMove.direction === 'right') {
    expect(newMove).toEqual({
      x: initialHitMove.x - 1,
      y: initialHitMove.y,
      direction: 'left',
    });
  }
});
