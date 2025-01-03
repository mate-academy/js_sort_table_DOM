'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('thead th');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(table.querySelectorAll('tbody tr'));
      const sortedRows = rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[index].textContent.trim();
        const cellB = rowB.cells[index].textContent.trim();

        const valueA =
          parseFloat(cellA.replace(/[^0-9.]/g, '')) || cellA.toLowerCase();
        const valueB =
          parseFloat(cellB.replace(/[^0-9.]/g, '')) || cellB.toLowerCase();

          return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
      });

      const tbody = table.querySelector('tbody');

      tbody.innerHTML = '';
      sortedRows.forEach((row) => tbody.appendChild(row));
    });
  });
});
