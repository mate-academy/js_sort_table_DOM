'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

[...document.querySelectorAll('th')]
  .map(th => {
    th.dataset.name = th.innerText;
  });

function sortByName(a, b) {
  return a > b ? 1 : -1;
}

function sortByPosition(a, b) {
  return a > b ? 1 : -1;
}

function sortByAge(a, b) {
  return a - b;
}

function sortBySalary(a, b) {
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
        return sortByName(valueA, valueB);

      case 'Position':
        return sortByPosition(valueA, valueB);

      case 'Age':
        return sortByAge(valueA, valueB);

      case 'Salary':
        return sortBySalary(valueA, valueB);

      default:
        return 0;
    }
  });

  for (const row of rows) {
    tableBody.appendChild(row);
  }
});
