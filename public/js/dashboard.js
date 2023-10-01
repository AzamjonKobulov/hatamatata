const sidebar = document.querySelector('.sidebar');
const sideBarMenuBtn = document.querySelector('.sidebar-menu-button');
const body = document.body;

const toggleSidebarMenu = () => {
  sidebar.classList.toggle('hidden');
  body.classList.toggle('overflow-hidden');
};

sideBarMenuBtn.addEventListener('click', toggleSidebarMenu);
