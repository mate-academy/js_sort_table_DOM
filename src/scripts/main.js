'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));
      const isNumeric =
        header.innerText === 'Age' || header.innerText === 'Salary';

      rows.sort((rowA, rowB) => {
        const cellA = rowA.children[index].innerText;
        const cellB = rowB.children[index].innerText;

        if (isNumeric) {
          const numA = parseFloat(cellA.replace(/[^0-9.-]+/g, ''));
          const numB = parseFloat(cellB.replace(/[^0-9.-]+/g, ''));

          return numA - numB;
        } else {
          return cellA.localeCompare(cellB);
        }
      });

      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
