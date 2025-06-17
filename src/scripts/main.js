'use strict';

function parseCellValue(cell) {
  const trimmed = cell.trim();

  if (trimmed.startsWith('$')) {
    return parseFloat(trimmed.replace(/[$,]/g, ''));
  }

  const numeric = Number(trimmed);

  return isNaN(numeric) ? trimmed : numeric;
}

function sortTable() {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('thead th');
  const tbody = table.querySelector('tbody');

  headers.forEach((th, idx) => {
    th.addEventListener('click', () => {
      const rows = [...tbody.querySelectorAll('tr')];

      rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[idx].textContent;
        const cellB = rowB.cells[idx].textContent;

        const valueA = parseCellValue(cellA);
        const valueB = parseCellValue(cellB);

        if (valueA > valueB) {
          return 1;
        }

        if (valueA < valueB) {
          return -1;
        }

        return 0;
      });

      rows.forEach((row) => tbody.appendChild(row));
    });
  });
}

sortTable();
