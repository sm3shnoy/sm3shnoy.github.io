'use strict';

// модальное окно
var modalOpenBtn = document.querySelectorAll('.modal-open');
var overlay = document.querySelector('.overlay');
var modalCloseBtn = document.querySelectorAll('.modal-close');
var ESC_CODE = 27;

// ДОБАВИТЬ РАБОТУ ESC ДЛЯ ЗАКРЫТИЯ МОДАЛЬНОГО ОКНА

// var onEscPressMenuShow = function (evt) {
//   if (evt.keyCode == ESC_CODE) {
//     onClickHideModal();
//   }
// }

// Кнопки для открытия модальных окон
modalOpenBtn.forEach(function(item) {
  item.addEventListener('click', onClickShowModal);
});

// Функция открытия модального окна
function onClickShowModal() {
  var modalId = this.getAttribute('data-modal');
  var modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

  modalElem.classList.add('active');
  overlay.classList.add('active');

  // document.addEventListener('keydown', onEscPressMenuShow);
}

// кнопки для закрытия модальных окон
modalCloseBtn.forEach(function(item) {
  item.addEventListener('click', onClickHideModal);
});

// Функция для закрытия модального окна
function onClickHideModal () {
  var parentModal = this.closest('.modal');
  
  parentModal.classList.remove('active');
  overlay.classList.remove('active');
}