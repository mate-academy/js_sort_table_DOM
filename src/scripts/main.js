'use strict';

const table = document.querySelector('table');
const tBody = document.querySelector('tbody');

table.addEventListener('click', (e) => {
  const tr = tBody.querySelectorAll('tr');
  const targetTh = e.target.closest('th');
  const rows = Array.from(tr);

  if (!targetTh) {
    return;
  }

  if (targetTh.textContent === 'Name') {
    getStringSort(rows, 0);
  }

  if (targetTh.textContent === 'Position') {
    getStringSort(rows, 1);
  }

  if (targetTh.textContent === 'Age') {
    getStringSort(rows, 2);
  }

  if (targetTh.textContent === 'Salary') {
    getSalarySort(rows, 3);
  }
});

function getStringSort(array, thNumber) {
  array.sort((elemA, elemB) => {
    const valueA = elemA.children[thNumber].textContent;
    const valueB = elemB.children[thNumber].textContent;

    return valueA.localeCompare(valueB);
  });

  tBody.innerHTML = '';

  return array.forEach((row) => tBody.appendChild(row));
}

function getSalarySort(array, thNumber) {
  array.sort((value1, value2) => {
    const valueA = +value1.children[thNumber].textContent
      .replace('$', '')
      .replace(',', '');
    const valueB = +value2.children[thNumber].textContent
      .replace('$', '')
      .replace(',', '');

    return valueA - valueB;
  });

  tBody.innerHTML = '';

  array.forEach((row) => tBody.appendChild(row));
}
