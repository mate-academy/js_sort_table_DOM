'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');

headers.forEach((header, i) => {
  header.addEventListener('click', () => {
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    const isNumericColumn = i === 2 || i === 3;

    rows.sort((rowA, rowB) => {
      let cellA = rowA.children[i].textContent.trim();
      let cellB = rowB.children[i].textContent.trim();

      if (isNumericColumn) {
        if (i === 3) {
          cellA = cellA.replace(/[$,]/g, '');
          cellB = cellB.replace(/[$,]/g, '');
        }

        return +cellA - +cellB;
      } else {
        return cellA.localeCompare(cellB);
      }
    });
    rows.forEach((row) => table.querySelector('tbody').appendChild(row));
  });
});
