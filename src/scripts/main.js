'use strict';

const table = document.querySelector('table');

if (!table) {
  throw new Error('Table element is missing in the document.');
}

const headerCells = table.querySelectorAll('thead th');
const body = table.querySelector('tbody');

const castValue = (value) => {
  const trimmed = value.trim();

  if (trimmed.startsWith('$')) {
    return Number(trimmed.replace(/[$,]/g, ''));
  }

  if (/^\d+$/.test(trimmed)) {
    return Number(trimmed);
  }

  return trimmed.toLowerCase();
};

const sortRowsAscending = (columnIndex) => {
  const rows = Array.from(body.querySelectorAll('tr'));

  const sortedRows = rows.sort((rowA, rowB) => {
    const valueA = castValue(rowA.cells[columnIndex].textContent);
    const valueB = castValue(rowB.cells[columnIndex].textContent);

    if (valueA > valueB) {
      return 1;
    }

    if (valueA < valueB) {
      return -1;
    }

    return 0;
  });

  sortedRows.forEach((row) => {
    body.appendChild(row);
  });
};

headerCells.forEach((th, index) => {
  th.addEventListener('click', () => {
    sortRowsAscending(index);
  });
});
