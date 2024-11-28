'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('thead th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));
      const isNumericColumn = index === 2 || index === 3;
      const parseValue = (value) =>
        isNumericColumn
          ? parseFloat(value.replace(/[^0-9.]/g, ''))
          : value.toLowerCase();

      rows.sort((rowA, rowB) => {
        const cellA = rowA.children[index].textContent.trim();
        const cellB = rowB.children[index].textContent.trim();

        return parseValue(cellA) > parseValue(cellB) ? 1 : -1;
      });

      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
