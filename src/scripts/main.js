'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tbody = document.querySelector('tbody');
  const headers = document.querySelectorAll('th');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rowsArray = Array.from(tbody.querySelectorAll('tr'));
      const isNumberColumn = index === 2 || index === 3;

      const sortedRows = rowsArray.sort((rowA, rowB) => {
        const cellA = rowA.cells[index].innerText;
        const cellB = rowB.cells[index].innerText;

        if (isNumberColumn) {
          const numA = parseFloat(cellA.replace(/[^0-9.-]+/g, ''));
          const numB = parseFloat(cellB.replace(/[^0-9.-]+/g, ''));

          return numA - numB;
        } else {
          return cellA.localeCompare(cellB);
        }
      });

      tbody.innerHTML = '';

      sortedRows.forEach((row) => tbody.appendChild(row));
    });
  });
});
