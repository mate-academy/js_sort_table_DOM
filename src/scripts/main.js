'use strict';

const headers = document.querySelectorAll('thead th');
const rows = Array.from(document.querySelectorAll('tbody tr'));
const tbody = document.querySelector('tbody');

headers.forEach((header, headerIndex) => {
  header.addEventListener('click', () => {
    rows.sort((a, b) => {
      const rowA = a.cells[headerIndex].textContent.trim();
      const rowB = b.cells[headerIndex].textContent.trim();

      return rowA.localeCompare(rowB, undefined, { numeric: true });
    });

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.append(row));
  });
});
