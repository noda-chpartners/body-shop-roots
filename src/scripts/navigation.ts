const setupNavigation = () => {
  const button = document.querySelector<HTMLButtonElement>('[data-menu-button]');
  const navigation = document.querySelector<HTMLElement>('[data-navigation]');
  const links = document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]');

  if (!button || !navigation) return;

  const setMenuState = (isOpen: boolean) => {
    button.classList.toggle('is-active', isOpen);
    navigation.classList.toggle('is-open', isOpen);
    document.body.classList.toggle('is-menu-open', isOpen);
    button.setAttribute('aria-expanded', String(isOpen));
    button.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  };

  button.addEventListener('click', () => {
    setMenuState(button.getAttribute('aria-expanded') !== 'true');
  });

  links.forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuState(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1120) setMenuState(false);
  });
};

export default setupNavigation;
