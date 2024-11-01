'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const rows = Array.from(table.querySelectorAll('tbody tr'));

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      sortTableByColumn(index);
    });
  });

  function sortTableByColumn(columnIndex) {
    const sortedRows = rows.slice().sort((rowA, rowB) => {
      const cellA = rowA.cells[columnIndex].textContent.trim();
      const cellB = rowB.cells[columnIndex].textContent.trim();

      if (columnIndex === 2) {
        return parseInt(cellA) - parseInt(cellB);
      }

      if (columnIndex === 3) {
        return (
          parseFloat(cellA.replace(/[$,]/g, '')) -
          parseFloat(cellB.replace(/[$,]/g, ''))
        );
      }

      return cellA.localeCompare(cellB);
    });

    const tbody = table.querySelector('tbody');

    tbody.innerHTML = '';
    sortedRows.forEach((row) => tbody.appendChild(row));
  }
});
