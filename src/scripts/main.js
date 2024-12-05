'use strict';

const grid = document.querySelector('table');

grid.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const body = document.querySelector('tbody');
  const rows = [...body.rows];
  const collIndex = e.target.cellIndex;

  const firstCell = rows[0].cells[collIndex].textContent.trim();
  const type = !isNaN(firstCell.replace(/[,]/g, '')) ? 'number' : 'string';

  switch (type) {
    case 'number':
      rows.sort((rowA, rowB) => {
        const cellA = parseFloat(
          rowA.cells[collIndex].textContent.replace(/[^0-9.-]+/g, ''),
        );
        const cellB = parseFloat(
          rowB.cells[collIndex].textContent.replace(/[^0-9.-]+/g, ''),
        );

        return cellA - cellB;
      });
      break;

    case 'string':
      rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[collIndex].textContent.trim();
        const cellB = rowB.cells[collIndex].textContent.trim();

        return cellA.localeCompare(cellB);
      });
      break;
  }

  rows.forEach((row) => body.appendChild(row));
});
