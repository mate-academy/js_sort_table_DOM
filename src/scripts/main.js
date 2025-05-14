'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');

  headers.forEach((header, columnIndex) => {
    header.addEventListener('click', () => {
      const tbody = table.querySelector('tbody');
      const rowsArray = Array.from(tbody.querySelectorAll('tr'));

      rowsArray.sort((rowA, rowB) => {
        const cellA = rowA.children[columnIndex].textContent.trim();
        const cellB = rowB.children[columnIndex].textContent.trim();

        const numA = parseFloat(cellA.replace(/[^0-9.]/g, ''));
        const numB = parseFloat(cellB.replace(/[^0-9.]/g, ''));

        if (!isNaN(numA) && !isNaN(numB)) {
          return numA - numB;
        }

        return cellA.localeCompare(cellB);
      });

      tbody.innerHTML = '';
      rowsArray.forEach((row) => tbody.appendChild(row));
    });
  });
});
