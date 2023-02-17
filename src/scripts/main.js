'use strict';

function numStr(string) {
  return +string.split('$').join('').split(',').join('');
}

const table = document.querySelector('table');
const nameColumn = table.rows[0].children[0];
const positionColumn = table.rows[0].children[1];
const ageColumn = table.rows[0].children[2];
const salaryColumn = table.rows[0].children[3];

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

nameColumn.addEventListener('click', e => {
  tableSort(0);
});

positionColumn.addEventListener('click', e => {
  tableSort(1);
});

ageColumn.addEventListener('click', e => {
  tableSort(2);
});

salaryColumn.addEventListener('click', e => {
  tableSort(3);
});
