'use strict';

// dropdown
var dropdownBtn = document.querySelectorAll('.dropdown-main-btn');
var dropdownContent = document.querySelectorAll('.dropdown-list');

dropdownBtn.forEach(function(item) {
    item.addEventListener('click', onClickShowDropdownContent);  
});

function onClickShowDropdownContent () {
  (this.nextElementSibling) ? this.nextElementSibling.classList.toggle('show') : false;
}