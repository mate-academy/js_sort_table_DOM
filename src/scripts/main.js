'use strict';

const table = document.querySelector('table');
const bodyTable = document.querySelector('tbody');
const personInfo = [...bodyTable.rows];

table.addEventListener('click', (e) => {
  const header = e.target.closest('thead th');
  const index = header.cellIndex;

  switch (header.innerText) {
    case 'Name':
    case 'Position':
      personInfo
        .sort((a, b) => a.cells[index].innerText
          .localeCompare(b.cells[index].innerText));

      break;

    case 'Age':
      personInfo
        .sort((a, b) => a.cells[index].innerText - b.cells[index].innerText);

      break;

    case 'Salary':
      personInfo
        .sort((a, b) => getSalary(a.cells[index].innerText)
          - getSalary(b.cells[index].innerText));

      break;
  }

  bodyTable.append(...personInfo);
});

function getSalary(string) {
  return +string.slice(1).split(',').join('');
}
