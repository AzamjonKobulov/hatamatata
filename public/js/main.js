const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBtnHamburger = document.querySelector(
  '.mobile-menu-btn-hamburger'
);
const mobileMenuBtnClose = document.querySelector('.mobile-menu-btn-close');
const body = document.body;

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenuBtnHamburger.classList.toggle('hidden');
  mobileMenuBtnClose.classList.toggle('hidden');
  body.classList.toggle('overflow-hidden');
};

mobileMenuBtnHamburger.addEventListener('click', toggleMobileMenu);
mobileMenuBtnClose.addEventListener('click', toggleMobileMenu);
