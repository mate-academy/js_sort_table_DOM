'use strict';

// write code here
const th = document.querySelectorAll('th');

th[3].addEventListener('click', sortSalary);
th[2].addEventListener('click', sortAge);
th[1].addEventListener('click', sortStatus);
th[0].addEventListener('click', sortName);

function sortSalary() {
  const arr = [...document.querySelectorAll('tbody tr')];

  arr.sort((a, b) => parseFloat(a.cells[3].innerHTML
    .replaceAll('$', '')
    .replaceAll(',', '')) - parseFloat(b.cells[3].innerHTML
    .replaceAll('$', '').replaceAll(',', '')));

  const tbody = document.querySelector('tbody');

  tbody.append(...arr);
}

function sortAge() {
  const arr = [...document.querySelectorAll('tbody tr')];

  arr.sort((a, b) => parseFloat(a.cells[2].innerHTML)
  - parseFloat(b.cells[2].innerHTML));

  const tbody = document.querySelector('tbody');

  tbody.append(...arr);
}

function sortName() {
  const arr = [...document.querySelectorAll('tbody tr')];

  arr.sort((a, b) => a.cells[0].innerHTML.toLowerCase().replaceAll(' ', '')
    .localeCompare(b.cells[0].innerHTML.toLowerCase().replaceAll(' ', ''))
  );

  const tbody = document.querySelector('tbody');

  tbody.append(...arr);
}

function sortStatus() {
  const arr = [...document.querySelectorAll('tbody tr')];

  arr.sort((a, b) => a.cells[1].innerHTML.toLowerCase()
    .localeCompare(b.cells[1].innerHTML.toLowerCase())
  );

  const tbody = document.querySelector('tbody');

  tbody.append(...arr);
}
