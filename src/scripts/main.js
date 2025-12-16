'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const headers = table.querySelectorAll('thead th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortTableByColumn(index);
  });
});

function sortTableByColumn(columnIndex) {
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((rowA, rowB) => {
    const textA = rowA.children[columnIndex].textContent.trim();
    const textB = rowB.children[columnIndex].textContent.trim();

    const valueA = getCellValue(columnIndex, textA);
    const valueB = getCellValue(columnIndex, textB);

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return valueA - valueB;
    }

    return String(valueA).localeCompare(String(valueB));
  });

  rows.forEach((row) => {
    tbody.appendChild(row);
  });
}

function getCellValue(columnIndex, text) {
  if (columnIndex === 2) {
    return Number(text);
  }

  if (columnIndex === 3) {
    return Number(text.replace(/[^0-9]/g, ''));
  }

  return text;
}
