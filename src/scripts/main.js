'use strict';

const headers = document.querySelectorAll('thead th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => sortTable(index));
});

function parseCellValue(value) {
  const parsedValue = parseFloat(value.replace(/[^0-9.-]/g, ''));

  return isNaN(parsedValue) ? value : parsedValue;
}

function sortTable(columnIndex) {
  const table = document.querySelector('table');
  const rows = [...table.querySelectorAll('tbody tr')];

  rows.sort((row1, row2) => {
    const cell1 = parseCellValue(row1.cells[columnIndex].textContent.trim());
    const cell2 = parseCellValue(row2.cells[columnIndex].textContent.trim());

    if (cell1 < cell2) {
      return -1;
    }

    if (cell1 > cell2) {
      return 1;
    }

    return 0;
  });

  const tbody = table.querySelector('tbody');

  rows.forEach((row) => tbody.appendChild(row));
}
