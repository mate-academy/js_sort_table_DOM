'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');

function sortTableByColumn(index) {
  const rows = Array.from(table.rows).slice(1);
  const isNumeric = !isNaN(rows[0].cells[index].innerText.trim());

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[index].innerText.trim();
    const cellB = rowB.cells[index].innerText.trim();

    if (isNumeric) {
      return parseFloat(cellA) - parseFloat(cellB);
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  rows.forEach((row) => table.appendChild(row));
}

headers.forEach((header, index) => {
  header.addEventListener('click', () => sortTableByColumn(index));
});
