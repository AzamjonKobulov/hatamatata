const sidebar = document.querySelector('.sidebar');
const sideBarMenuBtn = document.querySelector('.sidebar-menu-button');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const body = document.body;

const toggleSidebarMenu = () => {
  sidebar.classList.toggle('hidden');
  hamburger.classList.toggle('hidden');
  close.classList.toggle('hidden');
  body.classList.toggle('overflow-hidden');
};

sideBarMenuBtn.addEventListener('click', toggleSidebarMenu);
