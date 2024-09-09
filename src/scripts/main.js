'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('th');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => sortTableByColumn(index));
  });

  function sortTableByColumn(columnIndex) {
    const table = document.querySelector('table tbody');
    const rows = Array.from(table.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      const cellA = rowA.querySelectorAll('td')[columnIndex].innerText.trim();
      const cellB = rowB.querySelectorAll('td')[columnIndex].innerText.trim();

      const aValue = isNaN(cellA) ? cellA : Number(cellA);
      const bValue = isNaN(cellB) ? cellB : Number(cellB);

      return aValue > bValue ? 1 : -1;
    });

    rows.forEach((row) => table.appendChild(row));
  }
});
