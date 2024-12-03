'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  table.addEventListener('click', (e) => {
    const target = e.target;

    if (target.tagName === 'TH') {
      const columnIndex = target.cellIndex;
      const rows = Array.from(table.tBodies[0].rows);

      rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].textContent.trim();
        const cellB = rowB.cells[columnIndex].textContent.trim();

        const valueA = isNaN(cellA) ? cellA : parseFloat(cellA);
        const valueB = isNaN(cellB) ? cellB : parseFloat(cellB);

        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
      });
      rows.forEach((row) => table.tBodies[0].appendChild(row));
    }
  });
});
