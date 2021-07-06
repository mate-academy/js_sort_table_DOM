'use strict';

const table = document.querySelector('table');
const tableRows = table.tBodies[0].rows;

table.tHead.addEventListener('click', e => {
  const header = e.target;
  const cellIndex = header.cellIndex;
  const sortedRows = Array.from(tableRows);

  switch (header.innerText) {
    case 'Age':
      sortedRows.sort((left, right) =>
        compareNumsCells(left, right, cellIndex));
      break;
    case 'Name':
    case 'Position':
      sortedRows.sort((left, right) =>
        compareTextCells(left, right, cellIndex));
      break;
    case 'Salary':
      sortedRows.sort((left, right) =>
        compareSalaryCells(left, right, cellIndex));
      break;
  }

  table.tBodies[0].append(...sortedRows);
});

function compareTextCells(left, right, cellIndex) {
  return left.cells[cellIndex].innerText
    .localeCompare(right.cells[cellIndex].innerText);
}

function compareNumsCells(left, right, cellIndex) {
  return left.cells[cellIndex].innerText - right.cells[cellIndex].innerText;
}

function compareSalaryCells(left, right, cellIndex) {
  return toNumber(left.cells[cellIndex].innerText)
    - toNumber(right.cells[cellIndex].innerText);
}

function toNumber(number) {
  const converted = number.slice(1).split(',').join('');

  return +converted;
}
