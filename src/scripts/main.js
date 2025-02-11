'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[index].textContent.trim();
      const cellB = rowB.cells[index].textContent.trim();

      const numA = parseFloat(cellA.replace(/[^0-9.]/g, ''));
      const numB = parseFloat(cellB.replace(/[^0-9.]/g, ''));

      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      } else {
        return cellA.localeCompare(cellB);
      }
    });
    rows.forEach((row) => tbody.appendChild(row));
  });
});
