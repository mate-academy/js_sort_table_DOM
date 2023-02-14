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
      return makeComparableNumber(rowA, cellIndex)
        - makeComparableNumber(rowB, cellIndex);
    }

    if (cellIndex === 3) {
      return makeComparableNumber(rowA, cellIndex, true)
        - makeComparableNumber(rowB, cellIndex, true);
    }

    return makeComparable(rowA, cellIndex)
      .localeCompare(makeComparable(rowB, cellIndex));
  });
  body.append(...sorted);
});

const makeComparableNumber = (row, cellIdx, normalized) => {
  return +makeComparable(row, cellIdx, normalized);
};

const makeComparable = (row, cellIdx, normalized) => {
  return normalized ? row.cells[cellIdx].innerHTML.slice(1).replace(',', '')
    : row.cells[cellIdx].innerHTML;
};
