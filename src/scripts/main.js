'use strict';

const tableHead = document.querySelector('thead');

tableHead.addEventListener('click', ev => {
  const header = ev.target.closest('th');

  if (!header || !tableHead.contains(header)) {
    return;
  }

  const rows = document.querySelectorAll('tr');
  const values = [...rows].map(row => {
    return row.cells[ev.target.cellIndex].textContent;
  }).slice(1, -1);

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

  rows.forEach((row, idx) => {
    if (idx === 0 || idx === rows.length - 1) {
      return;
    }

    row.cells[ev.target.cellIndex].textContent = values[idx - 1];
  });
});
