'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const tbody = table.querySelector('tbody');
  const headers = table.querySelectorAll('th');

  headers.forEach((th, columnIndex) => {
    th.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      const sortedRows = rows.sort((rowA, rowB) => {
        const cellA = rowA.children[columnIndex].textContent.trim();
        const cellB = rowB.children[columnIndex].textContent.trim();

        const a = parseValue(cellA);
        const b = parseValue(cellB);

        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });

      tbody.innerHTML = '';
      sortedRows.forEach(row => tbody.appendChild(row));
    });
  });

  function parseValue(value) {
    if (value.startsWith('$')) {
      return Number(value.replace(/[$,]/g, ''));
    }

    if (!isNaN(value)) {
      return Number(value);
    }

    return value.toLowerCase();
  }
});
