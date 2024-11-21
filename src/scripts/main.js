'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rowsArr = Array.from(table.tBodies[0].rows);
    const colIndex = index;

    rowsArr.sort((rowA, rowB) => {
      let cellA = rowA.cells[colIndex].innerText.toLowerCase();
      let cellB = rowB.cells[colIndex].innerText.toLowerCase();

      if (colIndex === 2) {
        cellA = parseInt(cellA);
        cellB = parseInt(cellB);
      } else if (colIndex === 3) {
        cellA = parseFloat(cellA.replace(/[^0-9.-]+/g, ''));
        cellB = parseFloat(cellB.replace(/[^0-9.-]+/g, ''));
      }

      if (cellA < cellB) {
        return -1;
      } else if (cellA > cellB) {
        return 1;
      } else {
        return 0;
      }
    });

    rowsArr.forEach((row) => table.tBodies[0].appendChild(row));
  });
});
