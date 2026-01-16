'use strict';

const headers = document.querySelectorAll('thead th');

headers.forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    sortTable(columnIndex);
  });
});

function sortTable(columnIndex) {
  const table = document.querySelector('table');
  const tableBody = table.querySelector('tbody');
  const rows = Array.from(tableBody.querySelectorAll('tr'));

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex].innerText.trim();
    const cellB = rowB.cells[columnIndex].innerText.trim();

    const numA = parseFloat(cellA.replace('$', '').replace(',', ''));
    const numB = parseFloat(cellB.replace('$', '').replace(',', ''));

    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }

    return cellA.localeCompare(cellB);
  });

  tableBody.innerHTML = '';

  rows.forEach((row) => {
    tableBody.appendChild(row);
  });
}
