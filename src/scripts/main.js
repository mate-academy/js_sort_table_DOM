'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

table.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const columnIndex = th.cellIndex;
  const rowsArray = Array.from(tbody.rows);

  const isNumericColumn = columnIndex === 2 || columnIndex === 3;

  rowsArray.sort((rowA, rowB) => {
    let a = rowA.cells[columnIndex].textContent.trim();
    let b = rowB.cells[columnIndex].textContent.trim();

    if (isNumericColumn) {
      a = parseFloat(a.replace(/[$,]/g, '')) || 0;
      b = parseFloat(b.replace(/[$,]/g, '')) || 0;
    }

    return a > b ? 1 : -1;
  });

  tbody.append(...rowsArray);
});
