'use strict';

document.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'TH') {
    const columnIndex = ev.target.cellIndex;
    const table = document.querySelector('tbody');
    const tableRows = Array.from(table.rows);

    tableRows.sort((a, b) => {
      let firstRow = a.cells[columnIndex].textContent.trim();
      let secondRow = b.cells[columnIndex].textContent.trim();

      if (columnIndex === 3) {
        firstRow = +firstRow.replace(/[$,]/g, '');
        secondRow = +secondRow.replace(/[$,]/g, '');
      }

      if (isNaN(firstRow) && isNaN(secondRow)) {
        return firstRow.localeCompare(secondRow);
      } else {
        return Number(firstRow) - Number(secondRow);
      }
    });

    tableRows.forEach((row) => table.appendChild(row));
  }
});
