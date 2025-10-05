'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      sortTableByColumn(index);
    });
  });

  function sortTableByColumn(columnIndex) {
    const rowsArray = Array.from(tbody.querySelectorAll('tr'));

    rowsArray.sort((a, b) => {
      const cellA = a.children[columnIndex].textContent.trim();
      const cellB = b.children[columnIndex].textContent.trim();

      const isNumericColumn = columnIndex === 2 || columnIndex === 3;

      if (isNumericColumn) {
        const numA = parseValue(cellA, columnIndex);
        const numB = parseValue(cellB, columnIndex);

        return numA - numB;
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    tbody.innerHTML = '';
    rowsArray.forEach((row) => tbody.appendChild(row));
  }

  function parseValue(value, columnIndex) {
    if (columnIndex === 2) {
      return parseInt(value) || 0;
    }

    if (columnIndex === 3) {
      return parseInt(value.replace(/[^0-9]/g, '')) || 0;
    }

    return value;
  }
});
