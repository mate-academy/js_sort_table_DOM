'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.querySelector('tbody');
  const headerCells = document.querySelectorAll('thead th');

  if (!tableBody) {
    return;
  }

  headerCells.forEach((headerCell, index) => {
    headerCell.addEventListener('click', () => {
      const rows = Array.from(tableBody.querySelectorAll('tr'));

      rows.sort((rowA, rowB) => {
        const cellA = rowA.querySelectorAll('td')[index];
        const cellB = rowB.querySelectorAll('td')[index];

        const textA = cellA ? cellA.textContent.trim() : '';
        const textB = cellB ? cellB.textContent.trim() : '';

        if (index === 0 || index === 1) {
          return textA.localeCompare(textB, 'ru', { sensitivity: 'base' });
        }

        if (index === 2) {
          const numA = parseFloat(textA);
          const numB = parseFloat(textB);

          if (isNaN(numA) && isNaN(numB)) {
            return 0;
          }

          if (isNaN(numA)) {
            return 1;
          }

          if (isNaN(numB)) {
            return -1;
          }

          return numA - numB;
        }

        if (index === 3) {
          const cleanA = textA.replace(/[^0-9.]/g, '');
          const cleanB = textB.replace(/[^0-9.]/g, '');

          const numA = parseFloat(cleanA);
          const numB = parseFloat(cleanB);

          if (isNaN(numA) && isNaN(numB)) {
            return 0;
          }

          if (isNaN(numA)) {
            return 1;
          }

          if (isNaN(numB)) {
            return -1;
          }

          return numA - numB;
        }

        return 0;
      });

      rows.forEach((row) => {
        tableBody.appendChild(row);
      });
    });
  });
});
