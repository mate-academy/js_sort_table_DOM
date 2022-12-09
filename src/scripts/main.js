'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHead.addEventListener('click', (e) => {
  const sort = e.target.cellIndex;
  const sorted = [...tableBody.children].sort((a, b) => {
    let cellA = a.cells[sort].innerText;
    let cellB = b.cells[sort].innerText;

    if (cellA.includes('$')) {
      cellA = cellA.replace(/[$,]/g, '');
      cellB = cellB.replace(/[$,]/g, '');

      return cellA - cellB;
    }

    return cellA.localeCompare(cellB);
  });

  tableBody.append(...sorted);
});
