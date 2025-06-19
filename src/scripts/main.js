'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');

headers.forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      const cellA = rowA.children[columnIndex].textContent.trim();
      const cellB = rowB.children[columnIndex].textContent.trim();

      const numA = parseFloat(cellA.replace(/[$,]/g, ''));
      const numB = parseFloat(cellB.replace(/[$,]/g, ''));

      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      }

      return cellA.localeCompare(cellB);
    });

    rows.forEach((row) => tbody.appendChild(row));
  });
});
