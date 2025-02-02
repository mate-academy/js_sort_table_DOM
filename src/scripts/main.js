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

    const sortedRows = rows.sort((rowA, rowB) => {
      const cellA = rowA.children[columnIndex].textContent.trim();
      const cellB = rowB.children[columnIndex].textContent.trim();

      if (columnIndex === 2 || columnIndex === 3) {
        const numA = parseFloat(cellA.replace(/[^\d.]/g, ''));
        const numB = parseFloat(cellB.replace(/[^\d.]/g, ''));

        return numA - numB; // ASC
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    tbody.innerHTML = '';
    sortedRows.forEach((row) => tbody.appendChild(row));
  }
});
