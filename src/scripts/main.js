'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const sortDirection = {};

  headers.forEach((header, columnIndex) => {
    header.addEventListener('click', function () {
      const rows = Array.from(table.querySelectorAll('tbody tr'));

      const currentDirection =
        sortDirection[columnIndex] === 'asc' ? 'desc' : 'asc';

      sortDirection[columnIndex] = currentDirection;

      rows.sort((rowA, rowB) => {
        const cellA = rowA.children[columnIndex].textContent.trim();
        const cellB = rowB.children[columnIndex].textContent.trim();

        const a = isNaN(cellA) ? cellA : parseFloat(cellA);
        const b = isNaN(cellB) ? cellB : parseFloat(cellB);

        if (a < b) {
          return currentDirection === 'asc' ? -1 : 1;
        }

        if (a > b) {
          return currentDirection === 'asc' ? 1 : -1;
        }

        return 0;
      });

      const tbody = table.querySelector('tbody');

      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
