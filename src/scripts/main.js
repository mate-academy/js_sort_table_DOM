'use strict';

const table = document.querySelector('table');
const rows = table.rows;

const cellSalary = rows[0].cells[3];
const cellAge = rows[0].cells[2];

document.addEventListener('click', (e) => {
  const switchColumn = e.target.cellIndex;

  if (e.target.tagName === 'TD') {
    return;
  }

  const sortedRows = [...rows].slice(1, -1).sort((row1, row2) => {
    const item1 = row1.cells[switchColumn].innerText;
    const item2 = row2.cells[switchColumn].innerText;

    if (e.target === cellAge || e.target === cellSalary) {
      return +item1.replace(/[$,]/g, '') - +item2.replace(/[$,]/g, '');
    } else {
      return item1.localeCompare(item2);
    }
  });

  sortedRows.forEach((row) => table.append(row));
});
