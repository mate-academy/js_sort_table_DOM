'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  const headers = table.querySelectorAll('thead th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      rows.sort((rowA, rowB) => {
        const cellA = rowA.children[index].textContent.trim();
        const cellB = rowB.children[index].textContent.trim();

        if (index === 2 || index === 3) {
          const numA = parseFloat(cellA.replace(/[$,]/g, '')) || 0;
          const numB = parseFloat(cellB.replace(/[$,]/g, '')) || 0;

          return numA - numB;
        }

        return cellA.localeCompare(cellB);
      });

      tbody.innerHTML = '';
      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
