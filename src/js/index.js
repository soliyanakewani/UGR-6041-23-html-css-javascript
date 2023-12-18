document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.container__header__navigation__toggle-menu');
    const menu = document.querySelector('.container__header__navigation__menu');

    hamburger.addEventListener('change', () => {
      menu.style.display = hamburger.checked ? 'flex' : 'none';
    });
  });