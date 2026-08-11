document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.menu-toggle').forEach((button) => {
    const menuId = button.getAttribute('aria-controls');
    const menu = document.getElementById(menuId);
    if (!menu) return;
    button.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      menu.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
    }));
  });
});
