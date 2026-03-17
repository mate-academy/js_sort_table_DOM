'use strict';

const table = document.querySelector('table');

const tHead = table.querySelectorAll('th');

function sortTable(columnIndex) {
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll('tr'));

  const sortedRows = rows.sort((a, b) => {
    const cellA = a.children[columnIndex].textContent.trim();
    const cellB = b.children[columnIndex].textContent.trim();

    return cellA.localeCompare(cellB, undefined, { numeric: true });
  });

  tBody.append(...sortedRows);
}

tHead.forEach((header) => {
  header.addEventListener('click', () => {
    sortTable(header.cellIndex);
  });
});
