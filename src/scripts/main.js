'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  const sortDirections = {};

  headers.forEach((header, colIndex) => {
    sortDirections[colIndex] = 'asc';

    header.addEventListener('click', () => {
      const rowsArray = Array.from(tbody.querySelectorAll('tr'));
      const direction = sortDirections[colIndex];
      const multiplier = direction === 'asc' ? 1 : -1;

      rowsArray.sort((rowA, rowB) => {
        const cellA = rowA.children[colIndex].textContent.trim();
        const cellB = rowB.children[colIndex].textContent.trim();

        const a = parseCellValue(cellA);
        const b = parseCellValue(cellB);

        if (a < b) {
          return -1 * multiplier;
        }

        if (a > b) {
          return 1 * multiplier;
        }

        return 0;
      });

      rowsArray.forEach((row) => tbody.appendChild(row));

      sortDirections[colIndex] = direction === 'asc' ? 'desc' : 'asc';
    });
  });

  function parseCellValue(val) {
    if (val.startsWith('$')) {
      return parseFloat(val.replace(/[^0-9.-]+/g, ''));
    }

    if (!Number.isNaN(parseFloat(val))) {
      return parseFloat(val);
    }

    return val.toLowerCase();
  }
});
