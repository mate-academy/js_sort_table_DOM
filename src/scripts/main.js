'use strict';

// write code here

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

table.addEventListener('click', (e) => {
  const target = e.target.closest('th');

  if (!table.contains(target) || !target) {
    return;
  }

  const index = target.cellIndex;
  const rows = tbody.rows;

  const sortedRows = [...rows].sort((row1, row2) => {
    const rowA = row1.cells[index].textContent.replace(/[$,]/g, '');
    const rowB = row2.cells[index].textContent.replace(/[$,]/g, '');

    if (!isNaN(rowA)) {
      return rowA - rowB;
    } else {
      return rowA.localeCompare(rowB);
    }
  });

  tbody.append(...sortedRows);
});
