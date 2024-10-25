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

    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[columnIndex].textContent.trim();
      const cellB = rowB.cells[columnIndex].textContent.trim();

      const valueA =
        columnIndex === 3 ? parseFloat(cellA.replace(/[$,]/g, '')) : cellA;

      const valueB =
        columnIndex === 3 ? parseFloat(cellB.replace(/[$,]/g, '')) : cellB;

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
});
