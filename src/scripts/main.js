'use strict';

const table = document.body.firstElementChild;
const tableBody = table.tBodies[0];

table.addEventListener('click', function (e) {
  const th = e.target;

  if (th.tagName !== 'TH') {
    return;
  }

  const thIndex = th.cellIndex;
  const rows = Array.from(tableBody.rows);

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[thIndex].innerText.trim();
    const cellB = rowB.cells[thIndex].innerText.trim();

    return cellA.localeCompare(cellB, undefined, { numeric: true });
  });

  tableBody.append(...rows);
});
