'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.employees-table');

  if (!table) {
    return;
  }

  const headers = table.querySelectorAll('thead th');

  headers.forEach((header) => {
    header.addEventListener('click', () => {
      const columnIndex = Array.from(headers).indexOf(header);

      sortTableByColumn(table, columnIndex);
    });
  });
});

function sortTableByColumn(table, columnIndex) {
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex].textContent.trim();
    const cellB = rowB.cells[columnIndex].textContent.trim();

    return cellA.localeCompare(cellB, undefined, { numeric: true });
  });

  rows.forEach((row) => tbody.appendChild(row));
}
