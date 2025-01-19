'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const getTableRows = () => {
  return Array.from(table.querySelectorAll('tbody tr'));
};
const sortTable = (columnIndex) => {
  const rows = getTableRows();
  const dataType = columnIndex === 2 ? 'number' : 'string';
  const sortedRows = rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex].textContent.trim();
    const cellB = rowB.cells[columnIndex].textContent.trim();
    const valueA = dataType === 'number' ? Number(cellA) : cellA;
    const valueB = dataType === 'number' ? Number(cellB) : cellB;

    if (valueA > valueB) {
      return 1;
    }

    if (valueA < valueB) {
      return -1;
    }

    return 0;
  });

  const tbody = table.querySelector('tbody');

  tbody.innerHTML = '';
  sortedRows.forEach((row) => tbody.appendChild(row));
};

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortTable(index);
  });
});
