'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const tableRows = tableBody.querySelectorAll('tr');

tableHead.addEventListener('click', e => {
  const header = e.target.closest('th');

  if (!header || !tableHead.contains(header)) {
    return;
  }

  const values = [...tableRows].map(row => {
    return row.cells[e.target.cellIndex].textContent;
  });

  switch (header.textContent) {
    case 'Age':
      values.sort((a, b) => +a - +b);
      break;
    case 'Salary':
      values.sort((a, b) => +a.replace(/\D/g, '') - +b.replace(/\D/g, ''));
      break;
    case 'Name':
    case 'Position':
    default:
      values.sort();
      break;
  }

  tableRows.forEach((row, index) => {
    row.cells[e.target.cellIndex].textContent = values[index];
  });
});
