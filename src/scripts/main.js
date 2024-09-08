'use strict';

const table = document.querySelector('table');
const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const tBodyRows = [...tBody.rows];

const asc = (e) => {
  const index = e.target.cellIndex;

  const sort = tBodyRows.sort((a, b) => {
    let cellA = a.cells[index].innerHTML;
    let cellB = b.cells[index].innerHTML;

    if (cellA[0] === '$') {
      cellA = +cellA.slice(1).split(',').join('');
      cellB = +cellB.slice(1).split(',').join('');

      return cellA - cellB;
    }

    if (+cellA) {
      return cellA - cellB;
    }

    return cellA.localeCompare(cellB);
  });

  table.tBodies[0].append(...sort);
};

tHead.addEventListener('click', asc);
