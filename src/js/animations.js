export const POP_IN_KEYFRAMES = [
  { opacity: 0, transform: 'scale(0)' },
  { opacity: 1, transform: 'scale(1.5)' },
  { opacity: 1, transform: 'scale(1)' },
];

export const ZOOM_IN_KEYFRAMES = [
  { opacity: 0, transform: 'scale(0)' },
  { opacity: 1, transform: 'scale(1)' },
];

export const SLIDE_OUT_LEFT = [
  { opacity: 1, transform: 'translateX(0)' },
  { opacity: 0, transform: 'translateX(-100%)' },
];

export const SLIDE_IN_RIGHT = [
  { opacity: 0, transform: 'translateX(100%)' },
  { opacity: 1, transform: 'translateX(0)' },
];
