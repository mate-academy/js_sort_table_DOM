'use strict';

const table = document.querySelector('table');
const th = table.querySelectorAll('th');

th.forEach((header) => {
  header.addEventListener('click', (e) => {
    const rows = table.querySelector('tbody').rows;
    const columnIndex = e.target.cellIndex;
    const sortedRows = Array.from(rows).sort((a, b) => {
      const aValue = a.cells[columnIndex].textContent;
      const bValue = b.cells[columnIndex].textContent;

      const aNumber = parseFloat(aValue.replace(/[^0-9.]/g, ''));
      const bNumber = parseFloat(bValue.replace(/[^0-9.]/g, ''));

      if (!Number.isNaN(aNumber)) {
        return aNumber - bNumber;
      } else {
        return aValue.localeCompare(bValue);
      }
    });

    sortedRows.forEach((row) => table.querySelector('tbody').appendChild(row));
  });
});
