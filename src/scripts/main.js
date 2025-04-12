'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('thead th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      rows.sort((a, b) => {
        const cellA = a.children[index].textContent.trim();
        const cellB = b.children[index].textContent.trim();

        const numA = parseFloat(cellA.replace(/[$,]/g, ''));
        const numB = parseFloat(cellB.replace(/[$,]/g, ''));

        if (!isNaN(numA) && !isNaN(numB)) {
          return numA - numB;
        }

        return cellA.localeCompare(cellB);
      });

      rows.forEach(row => tbody.appendChild(row));
    });
  });
});
