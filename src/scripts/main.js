'use strict';

const table = document.querySelector('table');
const tableBody = table.tBodies[0];
const tableRows = [...tableBody.querySelectorAll('tr')];

const getSalary = (salary) => {
  return salary.replace(/[$,]/g, '');
};

function sortRowBy(header) {
  switch (header) {
    case 'Name':
      tableRows.sort((rowA, rowB) =>
        rowA.cells[0].innerText.localeCompare(rowB.cells[0].innerText)
      );
      break;

    case 'Position':
      tableRows.sort((rowA, rowB) =>
        rowA.cells[1].innerText.localeCompare(rowB.cells[1].innerText)
      );
      break;

    case 'Age':
      tableRows.sort(
        (rowA, rowB) => rowA.cells[2].innerText - rowB.cells[2].innerText
      );
      break;

    case 'Salary':
      tableRows.sort(
        (rowA, rowB) =>
          getSalary(rowA.cells[3].innerText)
          - getSalary(rowB.cells[3].innerText)
      );
      break;

    default:
      throw Error('Unknown option for sorting');
  }
}

table.tHead.addEventListener('click', (e) => {
  const tableHeader = e.target.innerText;

  sortRowBy(tableHeader);
  tableBody.append(...tableRows);
});
