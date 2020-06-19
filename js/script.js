'use strict';

// Адаптивное меню на экранах меньше 1200 пикселей
var toggleMenu = document.querySelector('.sidebar-menu-toggle');
var closeMenu = document.querySelector('.sidebar-close');
var overlay = document.querySelector('.overlay');
var sidebarMenu = document.querySelector('.sidebar');
var ESC_CODE = 27;

var onEscPressMenuShow = function (evt) {
  if (evt.keyCode == ESC_CODE) {
    onClickMenuHide();
  }
}

function onClickMenuShow () {
  overlay.style.display = 'block';
  sidebarMenu.classList.add('sidebar-show');
  addEventShowMenu();
}

function onClickMenuHide () {
  overlay.style.display = 'none';
  sidebarMenu.classList.remove('sidebar-show');
  
  removeEventShowMenu();
}

function addEventShowMenu () {
  toggleMenu.removeEventListener('click', onClickMenuShow);
  document.addEventListener('keydown', onEscPressMenuShow);
  overlay.addEventListener('click', onClickMenuHide);
  closeMenu.addEventListener('click', onClickMenuHide);
  document.body.style.overflow = 'hidden';
}

function removeEventShowMenu () {
  toggleMenu.addEventListener('click', onClickMenuShow);
  document.removeEventListener('keydown', onEscPressMenuShow);
  overlay.removeEventListener('click', onClickMenuHide);
  closeMenu.removeEventListener('click', onClickMenuHide);
  document.body.style.overflow = 'auto';
}

removeEventShowMenu();

