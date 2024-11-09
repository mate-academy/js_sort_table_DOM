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
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
      const cellA = a.children[columnIndex].textContent.trim();
      const cellB = b.children[columnIndex].textContent.trim();

      const valueA = parseValue(cellA);
      const valueB = parseValue(cellB);

      if (valueA < valueB) {
        return -1;
      }

      if (valueA > valueB) {
        return 1;
      }

      return 0;
    });

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));
  }

  function parseValue(value) {
    if (value.includes('$')) {
      return parseFloat(value.replace(/[$,]/g, ''));
    }

    if (!isNaN(value)) {
      return parseFloat(value);
    }

    return value.toLowerCase();
  }
});
