'use strict';

const table = document.querySelector('tbody');
const rows = table.querySelectorAll('tr');
const header = document.querySelector('thead');

header.addEventListener('click', ev => {
  const cellNum = ev.target.cellIndex;
  const cellContent = rows[0].children[cellNum].textContent;
  let cellDataType = '';

  if (Number.isInteger(+cellContent)) {
    cellDataType = 'num';
  } else if (cellContent.startsWith('$')) {
    cellDataType = 'usd';
  } else {
    cellDataType = 'str';
  }

  const sortedRows = [...rows].sort((row1, row2) => {
    let firstCell = row1.children[cellNum].textContent;
    let secondCell = row2.children[cellNum].textContent;

    switch (cellDataType) {
      case 'num':
        return firstCell - secondCell;
      case 'usd':
        firstCell = firstCell.slice(1).replace(',', '');
        secondCell = secondCell.slice(1).replace(',', '');

        return firstCell - secondCell;
      case 'str':
        return firstCell.localeCompare(secondCell);
      default:
        return;
    };
  });

  sortedRows.forEach(row => {
    table.append(row);
  });
});
