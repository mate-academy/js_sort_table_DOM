'use strict';

document.querySelector('thead').addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const table = e.target.closest('table');
    const tBody = table.querySelector('tbody');
    const index = e.target.cellIndex;
    const rows = Array.from(tBody.rows);

    rows.sort((a, b) => {
      const cellA = a.cells[index].textContent.trim().replace(/[$,]/g, '');
      const cellB = b.cells[index].textContent.trim().replace(/[$,]/g, '');

      const valueA = isNaN(cellA) ? cellA : Number(cellA);
      const valueB = isNaN(cellB) ? cellB : Number(cellB);

      return valueA > valueB ? 1 : -1; // Ascending order
    });

    rows.forEach((row) => tBody.appendChild(row));
  }
});
