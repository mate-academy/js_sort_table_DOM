'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      const sortedRows = rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[index].textContent.trim();
        const cellB = rowB.cells[index].textContent.trim();

        const valueA = isNaN(cellA.replace(/[$,]/g, ''))
          ? cellA
          : parseFloat(cellA.replace(/[$,]/g, ''));
        const valueB = isNaN(cellB.replace(/[$,]/g, ''))
          ? cellB
          : parseFloat(cellB.replace(/[$,]/g, ''));

        return valueA > valueB ? 1 : -1;
      });

      tbody.innerHTML = '';
      sortedRows.forEach((row) => tbody.appendChild(row));
    });
  });
});
