const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBtnHamburger = document.querySelector(
  '.mobile-menu-btn-hamburger'
);
const sidebar = document.querySelector('.sidebar');
const sideBarMenuBtn = document.querySelector('.sidebar-menu-button');
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

const toggleSidebarMenu = () => {
  sidebar.classList.toggle('-translate-x-full');
};

sideBarMenuBtn.addEventListener('click', toggleSidebarMenu);
