'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortTable(index);
  });
});

function sortTable(columnIndex) {
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    const cellA = a.querySelector(`td:nth-child(${columnIndex + 1})`);
    const cellB = b.querySelector(`td:nth-child(${columnIndex + 1})`);

    const valueA = cellA.textContent.trim();
    const valueB = cellB.textContent.trim();

    return valueA.localeCompare(valueB, undefined, { numeric: true });
  });

  tbody.innerHTML = '';

  rows.forEach(row => {
    tbody.appendChild(row);
  });
}
