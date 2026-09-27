'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const cellIndex = e.target.cellIndex;
    const rows = Array.from(table.tBodies[0].rows);

    rows.sort((rowA, rowB) => {
      return rowA.cells[cellIndex].textContent.localeCompare(
        rowB.cells[cellIndex].textContent,
        undefined,
        { numeric: true },
      );
    });

    table.tBodies[0].append(...rows);
  }
});
