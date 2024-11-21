'use strict';

const tableHeaders = document.querySelectorAll('th');
const tableBody = document.querySelector('table tbody');

tableHeaders.forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    sortTableByColumn(columnIndex);
  });
});

function sortTableByColumn(columnIndex) {
  const tableRows = Array.from(tableBody.querySelectorAll('tr'));

  tableRows.sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex].textContent.trim();
    const cellB = rowB.cells[columnIndex].textContent.trim();

    return cellA.localeCompare(cellB, undefined, { numeric: true });
  });

  tableRows.forEach((row) => tableBody.append(row));
}
