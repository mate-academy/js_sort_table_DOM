'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const rows = table.querySelectorAll('tbody tr');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const columnIndex = [...headers].indexOf(header);
    const sortedRows = [...rows].sort((rowA, rowB) => {
      const cellA = rowA.querySelectorAll('td')[columnIndex].textContent.trim();
      const cellB = rowB.querySelectorAll('td')[columnIndex].textContent.trim();

      return cellA < cellB ? -1 : cellA > cellB ? 1 : 0;
    });

    rows.forEach(row => row.remove());

    sortedRows.forEach(sortedRow =>
      table.querySelector('tbody').appendChild(sortedRow));
  });
});
