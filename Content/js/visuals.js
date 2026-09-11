export function generateParticles(count) {
  for (let index = 0; index < count; index++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
    particle.style.animationDelay = `${-(Math.random() * 10)}s`;
    document.body.appendChild(particle);
  }
}

export function initRipples() {
  document.addEventListener('click', event => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${event.clientX}px`;
    ripple.style.top = `${event.clientY}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1000);
  });
}