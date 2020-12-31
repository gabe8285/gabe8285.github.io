'use strict';

var dropDowns = Array.from(document.querySelectorAll('.main-menu-li_dropdown'));

var handleClick = function handleClick(e) {
  e.preventDefault();
  dropDowns.forEach(function (node) {
    node.classList.remove('active');
  });
  e.currentTarget.classList.add('active');
};

dropDowns.forEach(function (node) {
  node.addEventListener('click', handleClick);
});