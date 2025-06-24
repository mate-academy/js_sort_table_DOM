'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      rows.sort((rowA, rowB) => {
        const cellA = rowA.children[index].textContent.trim();
        const cellB = rowB.children[index].textContent.trim();

        const numA = parseFloat(cellA.replace(/[^\d.]/g, ''));
        const numB = parseFloat(cellB.replace(/[^\d.]/g, ''));

        if (!isNaN(numA) && !isNaN(numB)) {
          return numA - numB;
        }

        return cellA.localeCompare(cellB);
      });

      tbody.innerHTML = '';
      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
