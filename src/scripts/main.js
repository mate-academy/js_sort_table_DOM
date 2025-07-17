'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');

const sortDirections = {};

headers.forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const headerText = header.textContent.trim();
    const direction = sortDirections[columnIndex] === 'asc' ? 'desc' : 'asc';

    sortDirections[columnIndex] = direction;

    const parseCellValue = (cell) => {
      const value = cell.textContent.trim();

      if (headerText === 'Salary') {
        return Number(value.replace(/[^0-9.-]+/g, ''));
      }

      if (headerText === 'Age') {
        return Number(value);
      }

      return value.toLowerCase();
    };

    rows.sort((rowA, rowB) => {
      const a = parseCellValue(rowA.cells[columnIndex]);
      const b = parseCellValue(rowB.cells[columnIndex]);

      if (a < b) {
        return direction === 'asc' ? -1 : 1;
      }

      if (a > b) {
        return direction === 'asc' ? 1 : -1;
      }

      return 0;
    });

    rows.forEach((row) => tbody.appendChild(row));
  });
});
