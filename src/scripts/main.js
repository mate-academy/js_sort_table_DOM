'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      rows.sort((rowA, rowB) => {
        const cellA = rowA.children[index].textContent.trim();
        const cellB = rowB.children[index].textContent.trim();

        const isNumericColumn = index >= 2;

        if (isNumericColumn) {
          return (
            parseFloat(cellA.replace(/[^0-9.-]+/g, '')) -
            parseFloat(cellB.replace(/[^0-9.-]+/g, ''))
          );
        } else {
          return cellA.localeCompare(cellB);
        }
      });

      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
