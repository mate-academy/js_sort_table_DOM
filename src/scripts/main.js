'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('thead th');
  const tbody = table.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));
      const isNumericColumn =
        header.textContent === 'Age' || header.textContent === 'Salary';
      const getCellValue = (row) => row.children[index].textContent.trim();

      rows.sort((rowA, rowB) => {
        const cellA = getCellValue(rowA);
        const cellB = getCellValue(rowB);

        if (isNumericColumn) {
          const valueA = parseFloat(cellA.replace(/[^0-9.-]+/g, ''));
          const valueB = parseFloat(cellB.replace(/[^0-9.-]+/g, ''));

          return valueA - valueB;
        } else {
          return cellA.localeCompare(cellB);
        }
      });
      tbody.innerHTML = '';
      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
