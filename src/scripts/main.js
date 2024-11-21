'use strict';

const table = document.querySelector('table');

const sortTable = (columnIndex) => {
  const tbody = table.tBodies[0];
  const rows = Array.from(tbody.rows);

  rows.sort((a, b) => {
    const valueA = a.cells[columnIndex].textContent.trim();
    const valueB = b.cells[columnIndex].textContent.trim();

    return valueA.localeCompare(valueB, 'en', { numeric: true });
  });

  tbody.innerHTML = '';
  rows.forEach((row) => tbody.appendChild(row));
};

const tableHeaders = table.querySelectorAll('th');

tableHeaders.forEach((header, index) => {
  header.addEventListener('click', () => sortTable(index));
});
