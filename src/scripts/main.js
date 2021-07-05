'use strict';

const table = document.querySelector('table');
const tableRows = table.tBodies[0].rows;

table.tHead.addEventListener('click', e => {
  const header = e.target;
  const cellIndex = header.cellIndex;
  const sortedRows = Array.from(tableRows);

  switch (cellIndex) {
    case 2:
      sortedRows.sort((left, right) => {
        return left.cells[2].innerText - right.cells[2].innerText;
      });
      break;
    case 0:
    case 1:
      sortedRows.sort((left, right) => {
        return left.cells[cellIndex].innerText
          .localeCompare(right.cells[cellIndex].innerText);
      });
      break;
    case 3:
      sortedRows.sort((left, right) => {
        return toNumber(left.cells[3].innerText)
        - toNumber(right.cells[3].innerText);
      });
      break;
  }

  table.tBodies[0].append(...sortedRows);
});

function toNumber(number) {
  const converted = number.slice(1).split(',').join('');

  return +converted;
}
