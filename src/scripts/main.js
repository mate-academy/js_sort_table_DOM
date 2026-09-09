'use strict';

const tableHeaders = document.querySelectorAll('thead th');
const rows = document.querySelectorAll('tbody tr');
const rowsArray = Array.from(rows);
const tableBody = document.querySelector('tbody');

tableHeaders.forEach((header, index) => {
  header.addEventListener('click', () => {
    rowsArray.sort((rowA, rowB) => {
      const cellA = rowA.children[index].textContent.trim();
      const cellB = rowB.children[index].textContent.trim();

      if (index === 2) {
        return +cellA - +cellB;
      }

      if (index === 3) {
        return (
          +cellA.replace('$', '').replace(',', '') -
          +cellB.replace('$', '').replace(',', '')
        );
      }

      return cellA.localeCompare(cellB);
    });

    rowsArray.forEach((row) => {
      tableBody.appendChild(row);
    });
  });
});
