'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');
  const tbody = table.querySelector('tbody');
  const headers = Array.from(table.querySelectorAll('th'));
  const rows = Array.from(tbody.querySelectorAll('tr'));

  headers.forEach((header, columnIndex) => {
    header.addEventListener('click', () => {
      const sortedRows = [...rows].sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].textContent.trim();
        const cellB = rowB.cells[columnIndex].textContent.trim();

        const valueA = parseFloat(cellA.replace(/[$,]/g, '')) || cellA;
        const valueB = parseFloat(cellB.replace(/[$,]/g, '')) || cellB;

        if (typeof valueA === 'number' && typeof valueB === 'number') {
          return valueA - valueB;
        } else {
          return valueA.localeCompare(valueB);
        }
      });

      while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
      }

      tbody.append(...sortedRows);
    });
  });
});
