import '../css/index.css';
import { animate as atebitAnimate } from 'atebit';
import { POP_IN_KEYFRAMES } from './animations';

document.addEventListener('DOMContentLoaded', () => {
  atebitAnimate(document.querySelectorAll('.char'), [
    POP_IN_KEYFRAMES,
    { duration: 150, fill: 'forwards' },
  ]);
});
