'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const isNumberColumn = index === 2 || index === 3;

    const sortedRows = rows.sort((a, b) => {
      const cellA = a.cells[index].innerText.trim();
      const cellB = b.cells[index].innerText.trim();

      if (isNumberColumn) {
        return (
          parseFloat(cellA.replace(/[$,]/g, '')) -
          parseFloat(cellB.replace(/[$,]+/g, ''))
        );
      }

      return cellA.localeCompare(cellB);
    });

    sortedRows.forEach((row) => tbody.appendChild(row));
  });
});
