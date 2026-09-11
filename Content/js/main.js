import { initInteractions } from './interactions.js';
import { generateParticles, initRipples } from './visuals.js';

document.addEventListener('DOMContentLoaded', () => {
  initInteractions();
  generateParticles(80);
  initRipples();
});