'use strict';

const table = document.querySelector('table');
const tBody = table.tBodies[0];
const tHead = table.tHead;
const tHeadCells = tHead.rows[0].cells;
const tBodyRows = [...tBody.rows];

for (let i = 0; i < tHeadCells.length; i++) {
  tHeadCells[i].addEventListener('click', function () {
    tBodyRows.sort((a, b) => {
      const cellA = a.cells[i].textContent;
      const cellB = b.cells[i].textContent;

      return cellA.localeCompare(cellB, undefined, { numeric: true });
    });

    tBodyRows.forEach((row) => {
      tBody.append(row);
    });
  });
}
