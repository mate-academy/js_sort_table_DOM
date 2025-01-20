'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('thead th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      const isNumeric = !isNaN(
        rows[0].children[index].textContent.trim().replace(/[$,]/g, ''),
      );

      rows.sort((rowA, rowB) => {
        const cellA = rowA.children[index].textContent.trim();
        const cellB = rowB.children[index].textContent.trim();

        if (isNumeric) {
          return (
            parseFloat(cellA.replace(/[$,]/g, '')) -
            parseFloat(cellB.replace(/[$,]/g, ''))
          );
        } else {
          return cellA.localeCompare(cellB);
        }
      });

      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
