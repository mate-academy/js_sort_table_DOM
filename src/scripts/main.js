'use strict';

const headRow = document.querySelector('thead tr');
const body = document.querySelector('tbody');
const bodyRows = body.querySelectorAll('tr');

const sortTable = (key, comparator) => {
  const sortedRows = [...bodyRows].sort(comparator);

  bodyRows.forEach(node => node.parentNode.removeChild(node));
  sortedRows.forEach(node => body.appendChild(node));
};

headRow.addEventListener('click', (e) => {
  const columnName = e.target.textContent.toLowerCase();
  let comparator;

  switch (columnName) {
    case 'name':
      comparator = (a, b) =>
        a.cells[0].textContent.localeCompare(b.cells[0].textContent);
      break;
    case 'position':
      comparator = (a, b) =>
        a.cells[1].textContent.localeCompare(b.cells[1].textContent);
      break;
    case 'age':
      comparator = (a, b) =>
        +(a.cells[2].textContent) - +(b.cells[2].textContent);
      break;
    case 'salary':
      comparator = (a, b) => {
        const aSalary = parseInt(
          a.cells[3].textContent.replace(/[^\d]/g, ''), 10);
        const bSalary = parseInt(
          b.cells[3].textContent.replace(/[^\d]/g, ''), 10);

        return aSalary - bSalary;
      };
      break;
    default:
      return;
  }

  sortTable(columnName, comparator);
});
