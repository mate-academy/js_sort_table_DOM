'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('thead th');
  const currentSort = {
    columnIndex: -1,
    direction: 'asc',
  };

  const compare = (a, b, type) => {
    if (type === 'number') {
      return a - b;
    }

    return a.localeCompare(b);
  };

  const sortTable = (columnIndex, direction) => {
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    const dataType = columnIndex === 2 ? 'number' : 'string';

    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[columnIndex].textContent.trim();
      const cellB = rowB.cells[columnIndex].textContent.trim();

      const valueA =
        dataType === 'number' ? parseFloat(cellA.replace(/[,$]/g, '')) : cellA;
      const valueB =
        dataType === 'number' ? parseFloat(cellB.replace(/[,$]/g, '')) : cellB;

      return compare(valueA, valueB, dataType);
    });

    if (direction === 'desc') {
      rows.reverse();
    }

    table.querySelector('tbody').innerHTML = '';
    rows.forEach((row) => table.querySelector('tbody').appendChild(row));
  };

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      if (currentSort.columnIndex === index) {
        currentSort.direction =
          currentSort.direction === 'asc' ? 'desc' : 'asc';
      } else {
        currentSort.columnIndex = index;
        currentSort.direction = 'asc';
      }

      sortTable(currentSort.columnIndex, currentSort.direction);
    });
  });
});
