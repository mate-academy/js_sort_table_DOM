'use strict';

const employeeList = [...document.querySelectorAll('tr')].slice(1, -1);
const mainList = document.querySelector('tbody');
const menu = document.querySelector('thead').firstElementChild.children;

function salarySort(list) {
  list.sort((a, b) => (+a.children[3].innerText.slice(1).split(',').join(''))
   - (+b.children[3].innerText.slice(1).split(',').join('')));

  mainList.append(...list);
}

function ageSort(list) {
  list.sort((a, b) => (+a.children[2].innerText) - (+b.children[2].innerText));

  mainList.append(...list);
}

function positionSort(list) {
  list.sort((a, b) => (a.children[1].innerText
    .localeCompare(b.children[1].innerText)));

  mainList.append(...list);
}

function nameSort(list) {
  list.sort((a, b) => (a.children[0].innerText
    .localeCompare(b.children[0].innerText)));

  mainList.append(...list);
}

menu[3].addEventListener('click', () => {
  salarySort(employeeList);
});

menu[2].addEventListener('click', () => {
  ageSort(employeeList);
});

menu[1].addEventListener('click', () => {
  positionSort(employeeList);
});

menu[0].addEventListener('click', () => {
  nameSort(employeeList);
});
