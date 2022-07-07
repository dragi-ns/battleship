export const START_GAME = Symbol('START_GAME');

// SETUP PHASE EVENTS
export const DISPLAY_SETUP_PHASE = Symbol('DISPLAY_SETUP_PHASE');
export const CHECK_COORDINATES = Symbol('CHECK_COORDINATES');
export const COORDINATES_FREE = Symbol('COORDINATES_FREE');
export const PLACE_SHIP = Symbol('PLACE_SHIP');
export const PLACEMENT_VALID = Symbol('PLACEMENT_VALID');
export const PLACE_SHIPS_RANDOM = Symbol('PLACE_SHIPS_RANDOM');
export const SETUP_PHASE_NEXT = Symbol('SETUP_PHASE_NEXT');
export const SETUP_PHASE_INCOMPLETE = Symbol('SETUP_PHASE_INCOMPLETE');

// ATTACK PHASE EVENTS
export const DISPLAY_ATTACK_PHASE = Symbol('DISPLAY_ATTACK_PHASE');
export const ATTACK = Symbol('ATTACK');
export const MISS = Symbol('MISS');
export const HIT = Symbol('HIT');
export const SUNK = Symbol('SUNK');
export const FLEET_GONE = Symbol('FLEET_GONE');
export const NEW_ROUND = Symbol('NEW_ROUND');
export const RESET_GAME = Symbol('RESET_GAME');
