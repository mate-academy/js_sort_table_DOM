'use strict';

const table = document.querySelector('table');
const tableHeaders = document.querySelectorAll('thead th');
const tbody = table.querySelector('tbody');

for (const th of tableHeaders) {
  th.addEventListener('click', (e) => {
    const headers = Array.from(th.parentNode.children);
    const index = headers.indexOf(th);

    const rows = Array.from(tbody.rows);

    const isNumberColumn = index === 2 || index === 3;

    rows.sort((rowA, rowB) => {
      let cellA = rowA.cells[index].textContent.trim();
      let cellB = rowB.cells[index].textContent.trim();

      if (isNumberColumn) {
        cellA = parseFloat(cellA.replace(/[^0-9.]/g, ''));
        cellB = parseFloat(cellB.replace(/[^0-9.]/g, ''));

        return cellA - cellB;
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    for (const row of rows) {
      tbody.appendChild(row);
    }
  });
}
