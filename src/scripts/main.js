'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const headers = table.querySelectorAll('thead th');

headers.forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    const rows = [...tbody.querySelectorAll('tr')];

    const sortedRows = rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[columnIndex].textContent;
      const cellB = rowB.cells[columnIndex].textContent;

      const numA = parseFloat(cellA.replace(/[^0-9.]/g, ''));
      const numB = parseFloat(cellB.replace(/[^0-9.]/g, ''));

      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      }

      return cellA.localeCompare(cellB);
    });

    tbody.append(...sortedRows);
  });
});
