'use strict';

const headers = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortTableByColumn(tbody, index);
  });
});

function sortTableByColumn(tableBody, columnIndex) {
  const rows = Array.from(tableBody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    const cellA = a.children[columnIndex].textContent.trim();
    const cellB = b.children[columnIndex].textContent.trim();

    const isNumberColumn = columnIndex === 2 || columnIndex === 3;

    if (isNumberColumn) {
      const numA = parseFloat(cellA.replace(/[^0-9.-]+/g, ''));
      const numB = parseFloat(cellB.replace(/[^0-9.-]+/g, ''));

      return numA - numB;
    }

    return cellA.localeCompare(cellB);
  });

  tableBody.innerHTML = '';
  rows.forEach((row) => tableBody.appendChild(row));
}
