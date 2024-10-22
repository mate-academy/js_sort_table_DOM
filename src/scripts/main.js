'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const headCells = thead.rows[0].cells;

for (let i = 0; i < headCells.length; i++) {
  headCells[i].addEventListener('click', (e) => {
    const index = e.target.cellIndex;
    const rows = tbody.rows;
    const rowsArr = [];

    for (const row of rows) {
      rowsArr.push(row);
    }

    const sortedRows = rowsArr.sort((rowA, rowB) => {
      const cellA = rowA.cells[index].textContent;
      const cellB = rowB.cells[index].textContent;

      if (cellA.includes('$')) {
        return parseFloat(
          cellA.replace('$', '').replace(',', '') -
            parseFloat(cellB.replace('$', '').replace(',', '')),
        );
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    sortedRows.forEach((row) => {
      tbody.appendChild(row);
    });
  });
}
