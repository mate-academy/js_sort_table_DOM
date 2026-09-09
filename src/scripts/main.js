'use strict';

// write code here
const table = document.querySelector('table');
const headers = table.querySelectorAll('thead th');
const tbody = table.querySelector('tbody');

function getCellValue(row, columnIndex) {
  const text = row.children[columnIndex].textContent.trim();
  const numericText = text.replace(/[^0-9.]/g, '');

  if (numericText !== '' && !Number.isNaN(Number(numericText))) {
    return Number(numericText);
  }

  return text;
}

headers.forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    const rows = [...tbody.querySelectorAll('tr')];

    rows.sort((rowA, rowB) => {
      const valueA = getCellValue(rowA, columnIndex);
      const valueB = getCellValue(rowB, columnIndex);

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return valueA - valueB;
      }

      return String(valueA).localeCompare(String(valueB));
    });

    tbody.append(...rows);
  });
});
