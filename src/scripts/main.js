'use strict';

// write code here
document.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'TH') {
    const columnIndex = ev.target.cellIndex;
    const table = ev.target.closest('table');
    const tBody = table.querySelector('tbody');
    const rows = Array.from(tBody.rows);

    rows.sort((a, b) => {
      let cellA = a.cells[columnIndex].textContent.trim();
      let cellB = b.cells[columnIndex].textContent.trim();

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

    rows.forEach((row) => tBody.appendChild(row));
  }
});
