'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

[...document.querySelectorAll('th')]
  .forEach(th => {
    th.dataset.name = th.innerText;
  });

function sortByString(a, b) {
  return a > b ? 1 : -1;
}

function sortByNumber(a, b) {
  const first = a.replace(/[$,]/gi, '');
  const second = b.replace(/[$,]/gi, '');

  return first - second;
}

tableHead.addEventListener('click', event => {
  const heading = event.target.dataset.name;
  const column = event.target.cellIndex;
  const rows = [...tableBody.children];

  rows.sort((rowA, rowB) => {
    const valueA = rowA.cells[column].textContent;
    const valueB = rowB.cells[column].textContent;

    switch (heading) {
      case 'Name':
        return sortByString(valueA, valueB);

      case 'Position':
        return sortByString(valueA, valueB);

      case 'Age':
        return sortByNumber(valueA, valueB);

      case 'Salary':
        return sortByNumber(valueA, valueB);

      default:
        return 0;
    }
  });

  for (const row of rows) {
    tableBody.appendChild(row);
  }
});
