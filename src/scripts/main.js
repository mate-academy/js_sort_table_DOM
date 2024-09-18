'use strict';

const headers = document.querySelectorAll('thead th');

headers.forEach((header) => {
  header.addEventListener('click', (e) => {
    if (e.target.tagName === 'TH') {
      const columnIndex = header.cellIndex;
      const tbody = document.querySelector('table tbody');
      const rows = Array.from(tbody.querySelectorAll('tr'));

      rows.sort((rowA, rowB) => {
        const cellA = rowA
          .querySelectorAll('td')
          [columnIndex].textContent.trim();
        const cellB = rowB
          .querySelectorAll('td')
          [columnIndex].textContent.trim();

        const isNumericColumn = columnIndex === 2 || columnIndex === 3;

        if (isNumericColumn) {
          const valueA = cellA.replace(/[^0-9.-]+/g, '');
          const valueB = cellB.replace(/[^0-9.-]+/g, '');

          return parseFloat(valueA) - parseFloat(valueB);
        } else {
          return cellA.localeCompare(cellB);
        }
      });

      tbody.innerHTML = '';
      rows.forEach((row) => tbody.appendChild(row));
    }
  });
});
