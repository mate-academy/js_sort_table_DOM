'use strict';

const table = document.querySelector('table');
const tHead = table.querySelector('thead');
const tBodyRows = [ ...table.tBodies[0].rows ];

function takeDigit(string) {
  return string.replace(/,|\$/g, '');
}

tHead.addEventListener('click', event => {
  const inASC = event.target.orderASC;

  tBodyRows.sort((a, b) => {
    const rowA = inASC ? b : a;
    const rowB = inASC ? a : b;
    const columnIndex = event.target.cellIndex;
    const dataA = rowA.cells[columnIndex].textContent;
    const dataB = rowB.cells[columnIndex].textContent;

    return dataA.search(/[0-9]/) >= 0
      ? takeDigit(dataA) - takeDigit(dataB)
      : dataA.localeCompare(dataB);
  });

  tBodyRows.forEach(row => table.tBodies[0].append(row));
  event.target.orderASC = !inASC;
});
