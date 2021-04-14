'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const tableRows = tableBody.querySelectorAll('tr');

tableHead.addEventListener('click', ev => {
  const header = ev.target.closest('th');

  if (!header || !tableHead.contains(header)) {
    return;
  }

  const values = [...tableRows].map(row => {
    return row.cells[ev.target.cellIndex].textContent;
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

  tableRows.forEach((row, idx) => {
    row.cells[ev.target.cellIndex].textContent = values[idx];
  });
});
