'use strict';

// write code here
const headers = document.querySelectorAll('th');

const sortBy = (columnIndex) => {
  const table = document.querySelector('table');
  const rows = Array.from(table.rows);
  const rowsToSort = rows.slice(1, rows.length - 1);

  rowsToSort.sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex].textContent;
    const cellB = rowB.cells[columnIndex].textContent;

    switch (columnIndex) {
      case 0:
        return cellA.localeCompare(cellB);
      case 1:
        return cellA.localeCompare(cellB);
      case 2:
        return +cellA - +cellB;
      case 3:
        return (
          +cellA.slice(1).split(',').join('') -
          +cellB.slice(1).split(',').join('')
        );
      default:
        return 0;
    }
  });

  rowsToSort.forEach((row) => table.appendChild(row));
};

headers.forEach((header, index) => {
  header.addEventListener('click', () => sortBy(index));
});
