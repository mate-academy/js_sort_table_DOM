'use strict';

function sortTable(columnIndex) {
  const table = document.querySelector('table');
  const tbody = table.querySelector('tbody') || table;
  const rows = Array.from(tbody.querySelectorAll('tr'));

  const dataRows = rows.filter((row) => {
    return !row.querySelector('th');
  });

  dataRows.sort((rowA, rowB) => {
    const cellA = rowA.querySelectorAll('td')[columnIndex];
    const cellB = rowB.querySelectorAll('td')[columnIndex];

    if (!cellA || !cellB) {
      return 0;
    }

    const valueA = cellA.textContent.trim();
    const valueB = cellB.textContent.trim();

    if (columnIndex === 2 || columnIndex === 3) {
      const numA = parseFloat(valueA.replace(/[^0-9.-]+/g, ''));
      const numB = parseFloat(valueB.replace(/[^0-9.-]+/g, ''));

      return numA - numB;
    }

    return valueA.localeCompare(valueB);
  });

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  dataRows.forEach((row) => {
    tbody.appendChild(row);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('th');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      sortTable(index);
    });
  });
});
