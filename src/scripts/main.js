'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const tbodyRows = [...tbody.rows];

table.addEventListener('click', (evnt) => {
  const index = evnt.target.cellIndex;
  const sort = tbodyRows.sort((a, b) => {
    let cellA = a.cells[index].innerHTML;
    let cellB = b.cells[index].innerHTML;

    if (cellA[0] === '$') {
      cellA = +cellA.slice(1).replace(',', '');
      cellB = +cellB.slice(1).replace(',', '');

      return cellA - cellB;
    }

    if (+cellA) {
      return cellA - cellB;
    }

    return cellA.localeCompare(cellB);
  });

  table.tBodies[0].append(...sort);
});
