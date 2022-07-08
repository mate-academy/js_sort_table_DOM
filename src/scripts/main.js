'use strict';

const table = document.querySelector('table');
const tBody = table.querySelector('tbody');

table.addEventListener('click', (e) => {
  const column = e.target.closest('th');

  if (!table.contains(column) || !column) {
    return;
  }

  const index = column.cellIndex;
  const rows = tBody.rows;

  const sorted = [...rows].sort((a, b) => {
    const rowA = a.sells[index].textContent.replace(/[$,]/g, '');
    const rowB = b.sells[index].textContent.replace(/[$,]/g, '');

    if (!isNaN(rowA)) {
      return rowA - rowB;
    } else {
      rowA.localeCompare(rowB);
    }
  });

  tBody.append(...sorted);
});
