(function () {
  var openBtn = document.querySelector('[data-menu-open]');
  var closeBtn = document.querySelector('[data-menu-close]');
  var menu = document.getElementById('mobileMenu');

  if (!openBtn || !closeBtn || !menu) return;

  function openMenu() {
    menu.classList.add('open');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    menu.classList.remove('open');
    document.body.classList.remove('menu-open');
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
})();
