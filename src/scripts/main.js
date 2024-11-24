'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('thead th');
const tbody = table.querySelector('tbody');

function getCellValue(row, index) {
  const cell = row.children[index];

  if (!cell) {
    return '';
  }

  const text = cell.textContent.trim();

  if (!isNaN(parseFloat(text.replace(/[$,]/g, '')))) {
    return parseFloat(text.replace(/[$,]/g, ''));
  }

  return text.toLowerCase();
}

function sortTable(index) {
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((rowA, rowB) => {
    const valueA = getCellValue(rowA, index);
    const valueB = getCellValue(rowB, index);

    if (valueA < valueB) {
      return -1;
    }

    if (valueA > valueB) {
      return 1;
    }

    return 0;
  });

  rows.forEach((row) => tbody.appendChild(row));
}

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortTable(index);
  });
});
