'use strict';

function initTableSort() {
  const table = document.querySelector('table');

  if (!table) {
    return;
  }

  const tHead = table.querySelectorAll('th');

  tHead.forEach((header) => {
    header.addEventListener('click', () => {
      sortTable(table, header.cellIndex);
    });
  });
}

function sortTable(table, columnIndex) {
  const tBody = table.tBodies[0];

  if (!tBody) {
    return;
  }

  const rows = Array.from(tBody.querySelectorAll('tr'));

  const sortedRows = rows.sort((a, b) => {
    const cellA = a.children[columnIndex].textContent.trim();
    const cellB = b.children[columnIndex].textContent.trim();

    return cellA.localeCompare(cellB, undefined, { numeric: true });
  });

  tBody.append(...sortedRows);
}

initTableSort();
