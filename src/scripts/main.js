'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[index].textContent.trim();
        const cellB = rowB.cells[index].textContent.trim();

        if (!isNaN(cellA) && !isNaN(cellB)) {
          return Number(cellA) - Number(cellB);
        }

        return cellA.localeCompare(cellB);
      });

      tbody.innerHTML = '';

      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
