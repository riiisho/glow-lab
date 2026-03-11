function toggleInterface() {
  document.querySelector('header').classList.toggle('hidden');
  document.querySelector('footer').classList.toggle('hidden');
  document.querySelector('.interface-hint')?.classList.toggle('hidden');
  document.querySelector('.burn-in-controls')?.classList.toggle('hidden');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') toggleInterface();
});

// Two-finger tap to toggle interface on touch devices
let twoFingerTimer = null;
document.addEventListener('touchstart', (e) => {
  if (e.touches.length === 2) {
    twoFingerTimer = setTimeout(toggleInterface, 0);
  }
}, { passive: true });
document.addEventListener('touchend', () => {
  clearTimeout(twoFingerTimer);
  twoFingerTimer = null;
}, { passive: true });
