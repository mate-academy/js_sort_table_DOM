'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');
  const headers = thead.querySelectorAll('th');

  const sortTable = (columnIndex) => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      const cellA = rowA.querySelectorAll('td')[columnIndex].textContent.trim();
      const cellB = rowB.querySelectorAll('td')[columnIndex].textContent.trim();

      const isNumber = !isNaN(parseFloat(cellA)) && isFinite(cellA);

      if (isNumber) {
        return parseFloat(cellA) - parseFloat(cellB);
      } else {
        return cellA.localeCompare(cellB, undefined, { sensitivity: 'base' });
      }
    });

    tbody.innerHTML = '';

    rows.forEach((row) => tbody.appendChild(row));
  };

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      sortTable(index);
    });
  });
});
