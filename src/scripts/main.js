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
        const cleanA = cellA.replace(/[^0-9.-]+/g, '');
        const numA = parseFloat(cleanA);
        const cleanB = cellB.replace(/[^0-9.-]+/g, '');
        const numB = parseFloat(cleanB);

        const isNumeric =
          cleanA !== '' && !isNaN(numA) && cleanB !== '' && !isNaN(numB);

        if (isNumeric) {
          cellA = numA;
          cellB = numB;

          return cellA - cellB;
        } else {
          return cellA.toLowerCase().localeCompare(cellB.toLowerCase());
        }
      });

      tbody.append(...rowsArray);
    });
  });
});
