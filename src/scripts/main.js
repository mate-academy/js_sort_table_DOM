'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('thead th');
const tbody = table.querySelector('tbody');

headers.forEach((header) => {
  header.addEventListener('click', () => {
    const columnIndex = header.cellIndex;

    const rows = Array.from(tbody.querySelectorAll('tr'));

    const sortedRows = rows.sort((rowA, rowB) => {
      const valueA = rowA.cells[columnIndex].textContent.trim();
      const valueB = rowB.cells[columnIndex].textContent.trim();

      const isNumeric = columnIndex === 2 || columnIndex === 3;

      if (isNumeric) {
        const numberA = Number(valueA.replace(/[^\d.-]/g, ''));
        const numberB = Number(valueB.replace(/[^\d.-]/g, ''));

        return numberA - numberB;
      }

      return valueA.localeCompare(valueB);
    });

    sortedRows.forEach((row) => {
      tbody.append(row);
    });
  });
});
