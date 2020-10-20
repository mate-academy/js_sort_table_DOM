'use strict';

const table = document.querySelector('table');
const tHead = table.querySelector('thead');
const tBodyRows = [ ...table.tBodies[0].rows ];

function takeDigit(string) {
  return string.length ? string.match(/[0-9]/g).join('') : string;
}

tHead.addEventListener('click', event => {
  tBodyRows.sort((a, b) => {
    const rowA = event.target.orderASC ? b : a;
    const rowB = event.target.orderASC ? a : b;
    const columnIndex = event.target.cellIndex;
    const dataA = rowA.cells[columnIndex].textContent;
    const dataB = rowB.cells[columnIndex].textContent;

    return Number.isInteger(a)
      ? dataA.localeCompare(dataB)
      : takeDigit(dataA) - takeDigit(dataB);
  });

  tBodyRows.forEach(row => table.tBodies[0].append(row));
  event.target.orderASC = !event.target.orderASC;
});
