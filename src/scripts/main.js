'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const headers = table.querySelectorAll('thead th');

headers.forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    const rowsArray = Array.from(tbody.rows);

    rowsArray.sort((rowA, rowB) => {
      const cellA = rowA.cells[columnIndex].textContent.trim();
      const cellB = rowB.cells[columnIndex].textContent.trim();

      const numberA = parseFloat(cellA.replace(/[$,]/g, ''));
      const numberB = parseFloat(cellB.replace(/[$,]/g, ''));

      const isNumeric = !isNaN(numberA) && !isNaN(numberB);

      if (isNumeric) {
        return numberA - numberB;
      }

      return cellA.localeCompare(cellB);
    });

    rowsArray.forEach((row) => {
      tbody.appendChild(row);
    });
  });
});
