'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');

function sortTable(columnIndex, isNumeric) {
  const rows = Array.from(table.rows).slice(1, -1);

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex].textContent.trim();
    const cellB = rowB.cells[columnIndex].textContent.trim();

    if (isNumeric) {
      const numA = parseFloat(cellA.replace(/[^\d.-]/g, ''));
      const numB = parseFloat(cellB.replace(/[^\d.-]/g, ''));

      return numA - numB;
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  rows.forEach((row) => table.appendChild(row));
}

function newTitle(e) {
  const header = e.target.closest('th');

  if (header) {
    const columnIndex = Array.from(headers).indexOf(header);
    const isNumeric = columnIndex === 2 || columnIndex === 3;

    sortTable(columnIndex, isNumeric);
  }
}

table.addEventListener('click', newTitle);
