'use strict';

const tableHeader = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const rableRows = [...tableBody.rows];

const sortRows = function(index) {
  const sortedRows = rableRows.sort((rowA, rowB) => {
    const cellA = rowA.cells[index].innerText;
    const cellB = rowB.cells[index].innerText;

    if (cellA.includes('$')) {
      const newCellA = cellA.replace(/[^0-9]/g, '');
      const newCellB = cellB.replace(/[^0-9]/g, '');

      return newCellA - newCellB;
    }

    return cellA > cellB ? 1 : cellA < cellB ? -1 : 0;
  });

  tableBody.append(...sortedRows);
};

tableHeader.addEventListener('click', (e) => {
  const index = e.target.cellIndex;

  if (index !== null || index !== undefined) {
    sortRows(index);
  }
});
