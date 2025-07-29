'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');

  headers.forEach((th, index) => {
    th.addEventListener('click', () => {
      const rows = Array.from(table.querySelectorAll('tbody tr'));

      rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[index].textContent.trim();
        const cellB = rowB.cells[index].textContent.trim();

        const cleanA = cellA.replace(/[^\d.-]/g, '');
        const cleanB = cellB.replace(/[^\d.-]/g, '');
        const numA = parseFloat(cleanA);
        const numB = parseFloat(cleanB);

        if (!isNaN(numA) && !isNaN(numB)) {
          return numA - numB;
        }

        return cellA.localeCompare(cellB);
      });

      const tbody = table.querySelector('tbody');

      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
