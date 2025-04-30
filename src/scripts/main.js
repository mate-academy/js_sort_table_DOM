'use strict';

const headers = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');

headers.forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      const cellA = rowA.children[columnIndex].textContent;
      const cellB = rowB.children[columnIndex].textContent;

      if (columnIndex === 2 || columnIndex === 3) {
        const numA = parseFloat(cellA.replace(/[^0-9.]/g, ''));
        const numB = parseFloat(cellB.replace(/[^0-9.]/g, ''));

        return numA - numB;
      }

      return cellA.localeCompare(cellB);
    });

    tbody.innerHTML = '';

    rows.forEach((row) => {
      tbody.appendChild(row);
    });
  });
});
