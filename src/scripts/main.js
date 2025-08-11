'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('thead th, tfoot th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rowsArray = Array.from(tbody.querySelectorAll('tr'));

      rowsArray.sort((rowA, rowB) => {
        let cellA = rowA.children[index].textContent.trim();
        let cellB = rowB.children[index].textContent.trim();

        const isNumeric =
          !isNaN(cellA.replace(/[^0-9.-]+/g, '')) &&
          !isNaN(cellB.replace(/[^0-9.-]+/g, ''));

        if (isNumeric) {
          cellA = parseFloat(cellA.replace(/[^0-9.-]+/g, ''));
          cellB = parseFloat(cellB.replace(/[^0-9.-]+/g, ''));

          return cellA - cellB;
        } else {
          return cellA.toLowerCase().localeCompare(cellB.toLowerCase());
        }
      });

      rowsArray.forEach((row) => tbody.appendChild(row));
    });
  });
});
