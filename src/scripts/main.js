'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');

headers.forEach((header) => {
  header.addEventListener('click', () => {
    const index = header.cellIndex;
    const tbody = table.tBodies[0];
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const sortedRows = rows.sort((rowA, rowB) => {
      const cellA = rowA.children[index].textContent.trim();
      const cellB = rowB.children[index].textContent.trim();

      return cellA.localeCompare(cellB, undefined, { numeric: true });
    });

    tbody.append(...sortedRows);
  });
});
