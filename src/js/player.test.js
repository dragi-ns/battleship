import Player, { isBot } from './player';
import { pipe } from './util';

describe('player public api', () => {
  let player = null;
  beforeEach(() => {
    player = Player({ name: 'Jeff' });
  });

  test('player object public api', () => {
    expect(Object.keys(player)).toEqual([
      'isBot',
      'name',
      'getScore',
      'setScore',
      'incrementScore',
      'isActive',
      'setActive',
      'toggleActive',
    ]);
  });

  test('is not a bot', () => {
    expect(player.isBot).toBe(false);
  });

  test('should have a correct name property value', () => {
    expect(player.name).toBe('Jeff');
  });

  test('setScore should set a score', () => {
    player.setScore(5);
    expect(player.getScore()).toBe(5);
  });

  test('incrementScore should increment a score by one', () => {
    player.incrementScore();
    expect(player.getScore()).toBe(1);
  });

  test('setActive should set an active state', () => {
    player.setActive(true);
    expect(player.isActive()).toBe(true);
  });

  test('toggleActive should toggle an active state', () => {
    player.toggleActive();
    expect(player.isActive()).toBe(true);
  });
});

describe('bot public api', () => {
  let bot = null;
  beforeEach(() => {
    bot = pipe(Player, isBot)({ name: 'Noobot' });
  });

  test('bot object public api', () => {
    expect(Object.keys(bot)).toEqual([
      'isBot',
      'name',
      'getScore',
      'setScore',
      'incrementScore',
      'isActive',
      'setActive',
      'toggleActive',
      'getMove',
      'lastMoveFeedback',
      'clearHistory',
    ]);
  });

  test('is a bot', () => {
    expect(bot.isBot).toBe(true);
  });

  test('getMove should generate a valid coordinates', () => {
    const { x, y } = bot.getMove(2);
    expect(x).toBeGreaterThanOrEqual(0);
    expect(x).toBeLessThan(2);
    expect(y).toBeGreaterThanOrEqual(0);
    expect(y).toBeLessThan(2);
  });

  test('getMove should not generate a same coordinates twice', () => {
    const move = bot.getMove(2);
    const move2 = bot.getMove(2);
    const move3 = bot.getMove(2);
    const move4 = bot.getMove(2);
    expect(move).not.toEqual(move2);
    expect(move).not.toEqual(move3);
    expect(move).not.toEqual(move4);
    expect(move2).not.toEqual(move3);
    expect(move2).not.toEqual(move4);
    expect(move3).not.toEqual(move4);
  });

  test('getMove should return null when there is no more coordinates variations', () => {
    bot.getMove(1);
    expect(bot.getMove(1)).toEqual({ x: null, y: null });
  });

  test('should make a smarter decision based on the last move feedback', () => {
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
});
