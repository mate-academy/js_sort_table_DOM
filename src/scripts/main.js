'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('thead th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      const getCellValue = (row) => row.children[index].textContent.trim();

      rows.sort((rowA, rowB) => {
        let a = getCellValue(rowA);
        let b = getCellValue(rowB);

        const isSalary = a.includes('$');

        if (isSalary) {
          a = parseFloat(a.replace(/[^0-9.-]+/g, ''));
          b = parseFloat(b.replace(/[^0-9.-]+/g, ''));
        } else if (!isNaN(a) && !isNaN(b)) {
          a = Number(a);
          b = Number(b);
        } else {
          a = a.toLowerCase();
          b = b.toLowerCase();
        }

        return a > b ? 1 : a < b ? -1 : 0;
      });

      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
