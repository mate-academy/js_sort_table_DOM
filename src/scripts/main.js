'use strict';

function numStr(string) {
  return +string.split('$').join('').split(',').join('');
}

const table = document.querySelector('table');

function tableSort(column) {
  const sortedRows = Array.from(table.rows)
    .slice(1, table.rows.length - 1);

  if (isNaN(numStr(table.rows[1].children[column].textContent))) {
    sortedRows.sort((rowA, rowB) =>
      rowA.cells[column].innerHTML > rowB.cells[column].innerHTML ? 1 : -1);
  } else {
    sortedRows.sort((rowA, rowB) =>
      numStr(rowA.cells[column].innerHTML)
      < numStr(rowB.cells[column].innerHTML)
        ? 1
        : -1
    );
  }

  table.tBodies[0].append(...sortedRows);
}

[...table.rows[0].children].forEach((column, index) =>
  column.addEventListener('click', e => {
    tableSort(index);
  }));
