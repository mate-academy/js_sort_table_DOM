'use strict';

const tabHead = document.querySelector('thead');
const tabBody = document.querySelector('tbody');

tabHead.addEventListener('click', (events) => {
  const cellInd = events.target.cellIndex;
  const copyTabBodyCh = [...tabBody.children];

  const sort = copyTabBodyCh.sort((a, b) => {
    let cellA = a.cells[cellInd].innerText;
    let cellB = b.cells[cellInd].innerText;

    if (cellA.slice(0, 1) === '$') {
      cellA = cellA.replace(/[^+\d]/g, '');
      cellB = cellB.replace(/[^+\d]/g, '');

      return cellA - cellB;
    }

    return cellA.localeCompare(cellB);
  });

  tabBody.append(...sort);
});
