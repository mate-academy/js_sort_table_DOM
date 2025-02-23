'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const tbody = table.querySelector('tbody');
  const headers = table.querySelectorAll('th');

  headers.forEach((header) => {
    header.addEventListener('click', () => {
      const columnIndex = header.cellIndex;
      const rows = Array.from(tbody.querySelectorAll('tr'));

      const isNumeric = columnIndex === 2 || columnIndex === 3;

      rows.sort((rowA, rowB) => {
        let cellA = rowA.cells[columnIndex].innerText.trim();
        let cellB = rowB.cells[columnIndex].innerText.trim();

        if (isNumeric) {
          cellA = parseFloat(cellA.replace(/[^0-9.-]+/g, ''));
          cellB = parseFloat(cellB.replace(/[^0-9.-]+/g, ''));

          return cellA - cellB;
        } else {
          return cellA.localeCompare(cellB);
        }
      });

      tbody.innerHTML = '';

      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
