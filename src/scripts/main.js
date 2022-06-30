'use strict';

// write code here
const th = document.querySelectorAll('th');

th[3].addEventListener('click', sortSalary);
th[2].addEventListener('click', sortAge);

function sortSalary() {
  const arr = [...document.querySelector('table').rows].slice(1);

  arr.sort((a, b) => parseFloat(a.cells[3].innerHTML
    .replaceAll('$', '')
    .replaceAll(',', '')) - parseFloat(b.cells[3].innerHTML
    .replaceAll('$', '').replaceAll(',', '')));

  const tbody = document.querySelector('tbody');

  tbody.append(...arr);
}

function sortAge() {
  const arr = [...document.querySelector('table').rows].slice(1);

  arr.sort((a, b) => parseFloat(a.cells[2].innerHTML)
  - parseFloat(b.cells[2].innerHTML));

  const tbody = document.querySelector('tbody');

  tbody.append(...arr);
}
