'use strict';

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const columnIndex = e.target.cellIndex;
    const table = e.target.closest('table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.rows);

    rows.sort((rowA, rowB) => {
      let cellA = rowA.cells[columnIndex].textContent.trim();
      let cellB = rowB.cells[columnIndex].textContent.trim();

      if (columnIndex === 3) {
        cellA = parseFloat(cellA.replace(/[$,]/g, ''));
        cellB = parseFloat(cellB.replace(/[$,]/g, ''));
      }

      if (isNaN(cellA) || isNaN(cellB)) {
        return cellA.localeCompare(cellB);
      } else {
        return Number(cellA) - Number(cellB);
      }
    });

    rows.forEach((row) => tbody.appendChild(row));
  }
});
