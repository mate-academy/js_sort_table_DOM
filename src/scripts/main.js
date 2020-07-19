'use strict';

const table = document.querySelector('table');
const tableHead = table.tHead.rows[0];
const headCells = tableHead.cells;
const bodyRows = table.tBodies[0].rows;
let numberOfColumn;

tableHead.addEventListener('click', event => {
  const point = document.elementFromPoint(event.clientX, event.clientY);

  for (let i = 0; i < headCells.length; i++) {
    if (headCells[i] === point) {
      numberOfColumn = i;
    }
  }

  const sortedTable = [...bodyRows].sort((a, b) => {
    const firstValue = a.cells[numberOfColumn].innerHTML;
    const secondValue = b.cells[numberOfColumn].innerHTML;
    const firstNumber = parseInt((firstValue).replace(/\D+/g, ''));
    const secondNumber = parseInt((secondValue).replace(/\D+/g, ''));

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
      if (firstValue > secondValue) {
        return 1;
      }

      if (firstValue < secondValue) {
        return -1;
      }

      return 0;
    } else {
      return firstNumber - secondNumber;
    }
  });

  for (const row of sortedTable) {
    table.tBodies[0].append(row);
  }
});
