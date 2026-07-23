import setupAnimations from './animations';
import setupNavigation from './navigation';

const setupHeader = () => {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 32);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
};

document.addEventListener('DOMContentLoaded', () => {
  setupHeader();
  setupNavigation();
  setupAnimations();
});
