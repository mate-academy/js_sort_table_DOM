'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHead.addEventListener('click', (e) => {
  const toSort = e.target.cellIndex;
  const forSortedTable = [...tableBody.children].sort((a, b) => {
    let cellA = a.cells[toSort].innerText;
    let cellB = b.cells[toSort].innerText;

    if (cellA.includes('$')) {
      cellA = cellA.replace(/[$,]/g, '');
      cellB = cellB.replace(/[$,]/g, '');

      return cellA - cellB;
    }

    return cellA.localeCompare(cellB);
  });

  tableBody.append(...forSortedTable);
});
