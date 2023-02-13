'use strict';

const header = document.querySelector('thead');
const body = document.querySelector('tbody');
const rows = body.rows;

header.addEventListener('click', e => {
  const headerEl = e.target.closest('th');
  const cellIndex = e.target.cellIndex;

  if (!headerEl) {
    return;
  }

  const sorted = [...rows];

  sorted.sort((rowA, rowB) => {
    if (cellIndex === 2) {
      return +rowA.cells[cellIndex].innerHTML
      - (+rowB.cells[cellIndex].innerHTML);
    }

    if (cellIndex === 3) {
      return +rowA.cells[cellIndex].innerHTML.slice(1).replace(',', '')
      - (+rowB.cells[cellIndex].innerHTML.slice(1).replace(',', ''));
    }

    return rowA.cells[cellIndex].innerHTML
      .localeCompare(rowB.cells[cellIndex].innerHTML);
  });
  body.append(...sorted);
});
