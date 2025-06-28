'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('thead th');
  const tbody = table.querySelector('tbody');

  let currentSortColumn = null;
  let sortDirection = 'asc';
  const numericColumnIndexes = [2, 3];

  headers.forEach((header) => {
    header.addEventListener('click', () => {
      const columnIndex = Array.from(headers).indexOf(header);

      if (currentSortColumn === columnIndex) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        sortDirection = 'asc';
        currentSortColumn = columnIndex;
      }

      const rows = Array.from(tbody.querySelectorAll('tr'));
      const isColumnNumeric = numericColumnIndexes.includes(columnIndex);

      rows.sort((rowA, rowB) => {
        const cellA = rowA.children[columnIndex].textContent.trim();
        const cellB = rowB.children[columnIndex].textContent.trim();

        let comparison = 0;

        if (isColumnNumeric) {
          const numA = parseFloat(cellA.replace(/[^0-9.-]/g, '')) || 0;
          const numB = parseFloat(cellB.replace(/[^0-9.-]/g, '')) || 0;

          comparison = numA - numB;
        } else {
          comparison = cellA.localeCompare(cellB);
        }

        return sortDirection === 'asc' ? comparison : -comparison;
      });

      while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
      }
      rows.forEach((row) => tbody.appendChild(row));

      headers.forEach((h) => h.classList.remove('asc', 'desc'));
      header.classList.add(sortDirection);
    });
  });
});
