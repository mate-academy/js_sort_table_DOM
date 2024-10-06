'use strict';

const table = document.querySelector('table');
const headers = document.querySelectorAll('th');
let sortDirection = 1;
let lastSortedColumn = -1;

table.querySelector('thead').addEventListener('click', (e) => {
  const header = e.target.closest('th');

  if (!header) {
    return;
  }

  const index = [...headers].indexOf(header);

  updateSortDirection(index);

  sortTable(index);
});

function updateSortDirection(columnIndex) {
  if (columnIndex === lastSortedColumn) {
    sortDirection = -sortDirection;
  } else {
    sortDirection = 1;
  }

  lastSortedColumn = columnIndex;
}

function getCellValue(row, columnIndex) {
  return currencyToNumber(row.cells[columnIndex].innerText);
}

function currencyToNumber(value) {
  if (value[0] === '$') {
    return +value.slice(1).split(',').join('');
  }

  return isNaN(value) ? value : +value;
}

function sortTable(columnIndex) {
  const tbody = table.querySelector('tbody');
  const rows = [...tbody.querySelectorAll('tr')];

  rows.sort((row1, row2) => {
    const value1 = getCellValue(row1, columnIndex);
    const value2 = getCellValue(row2, columnIndex);

    if (typeof value1 === 'number') {
      return (value1 - value2) * sortDirection;
    }

    return value1.toString().localeCompare(value2.toString()) * sortDirection;
  });

  tbody.innerHTML = '';
  rows.forEach((row) => tbody.appendChild(row));
}
