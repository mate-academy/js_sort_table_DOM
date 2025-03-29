'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('thead th');

headers.forEach((th, columnIndex) => {
  th.addEventListener('click', () => {
    sortTableByColumn(columnIndex);
  });
});

function sortTableByColumn(columnIndex) {
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.rows);

  const isNumberColumn = columnIndex === 2 || columnIndex === 3;

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex].textContent.trim();
    const cellB = rowB.cells[columnIndex].textContent.trim();

    const valueA = isNumberColumn
      ? Number(cellA.replace(/[$,]/g, ''))
      : cellA.toLowerCase();

    const valueB = isNumberColumn
      ? Number(cellB.replace(/[$,]/g, ''))
      : cellB.toLowerCase();

    if (valueA > valueB) {
      return 1;
    }

    if (valueA < valueB) {
      return -1;
    }

    return 0;
  });

  tbody.innerHTML = '';
  rows.forEach((row) => tbody.appendChild(row));
}
