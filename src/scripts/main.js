'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const rows = [...tbody.rows];

function getSortedData(column) {
  const index = column.cellIndex;
  const contentOfTheFirstCell = rows[0].cells[index].textContent;

  const sortedRows = rows.sort((rowA, rowB) => {
    const rowFirst = rowA.cells[index].textContent;
    const rowSecond = rowB.cells[index].textContent;

    if (contentOfTheFirstCell.includes('$')) {
      const valueFirst = Number(rowFirst
        .split('$')
        .join('')
        .split(',')
        .join('')
      );
      const valueSecond = Number(rowSecond
        .split('$')
        .join('')
        .split(',')
        .join('')
      );

      return valueFirst > valueSecond ? 1 : -1;
    }

    return rowFirst > rowSecond ? 1 : -1;
  });

  tbody.append(...sortedRows);
}

table.addEventListener('click', (clickHandler) => {
  if (table.tHead.contains(clickHandler.target)) {
    getSortedData(clickHandler.target);
  }
});
