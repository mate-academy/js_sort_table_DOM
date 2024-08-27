'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      sortTableByColumn(table, index);
    });
  });

  function sortTableByColumn(_table, columnIndex) {
    const rows = [...tbody.querySelectorAll('tr')];

    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[columnIndex].innerText.toLowerCase();
      const cellB = rowB.cells[columnIndex].innerText.toLowerCase();

      const valueA =
        columnIndex === 2
          ? parseInt(cellA)
          : columnIndex === 3
            ? parseFloat(cellA.replace('$', ''))
            : cellA;

      const valueB =
        columnIndex === 2
          ? parseInt(cellB)
          : columnIndex === 3
            ? parseFloat(cellB.replace('$', ''))
            : cellB;

      return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
    });

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));
  }
});
