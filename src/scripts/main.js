'use strict';

const table = document.querySelector('table');
const tBody = table.tBodies[0];
const tHead = table.tHead;
const tHeadCells = tHead.rows[0].cells;
const tBodyRows = [...tBody.rows];

for (let i = 0; i < tHeadCells.length; i++) {
  tHeadCells[i].addEventListener('click', function () {
    tBodyRows.sort((a, b) => {
      const cellA = a.cells[i].innerText.toLowerCase();
      const cellB = b.cells[i].innerText.toUpperCase();

      if (!isNaN(cellA) && isNaN(cellB)) {
        return parseFloat(cellA) - parseFloat(cellB);
      } else if (cellA.includes('$')) {
        const newA = cellA.replace(/[$,]/g, '');
        const newB = cellB.replace(/[$,]/g, '');

        return parseFloat(newA) - parseFloat(newB);
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    tBodyRows.forEach((row) => {
      tBody.append(row);
    });
  });
}
