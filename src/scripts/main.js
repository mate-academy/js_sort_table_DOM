'use strict';

const headers = document.querySelectorAll('th');
const table = document.querySelector('table');

headers.forEach((header) => {
  header.addEventListener('click', () => {
    const index = header.cellIndex;
    const rows = Array.from(table.querySelectorAll('tbody tr'));

    rows.sort((a, b) => {
      const cellA = a.cells[index].textContent.trim();
      const cellB = b.cells[index].textContent.trim();

      return cellA.localeCompare(cellB, undefined, { numeric: true });
    });

    rows.forEach((row) => table.querySelector('tbody').appendChild(row));
  });
});
