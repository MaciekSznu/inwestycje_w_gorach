'use strict';

/* BASE FUNCTIONS */
const click = (target, callback) => {
  target.addEventListener('click', (e) => {
    return callback(e)
  });
};

/* BURGER MENU */
const hamburgerButton = document.querySelector('.hamburger-menu');
const mainMenu = document.querySelector('.menu-wrapper');

const showMainMenu = () => {
  mainMenu.classList.toggle('visible');
};

const hamburgerActive = () => {
  hamburgerButton.classList.toggle('hamburger-active');
};

hamburgerButton.addEventListener('click', (e) => {
  showMainMenu();
  hamburgerActive();
});

const menuItems = document.querySelectorAll('.menu__item--link');

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (e) => {
    showMainMenu();
    hamburgerActive();
  });
});