'use strict';

const headers = document.querySelectorAll('th');
const tableBody = document.querySelector('table tbody');
const rows = [...tableBody.querySelectorAll('tr')];

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortTable(index);
  });
});

function sortTable(columIndex) {
  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[columIndex].textContent;
    const cellB = rowB.cells[columIndex].textContent;

    return cellA.localeCompare(cellB, undefined, { numeric: true });
  });

  tableBody.innerHTML = '';
  rows.forEach((row) => tableBody.appendChild(row));
}
