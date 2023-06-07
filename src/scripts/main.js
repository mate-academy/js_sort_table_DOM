'use strict';

const table = document.querySelector('table');
const thead = document.querySelector('thead');

/*function convNumber(text) {
  return Number(text.replace(/[^0-9.-]+/g, ''));
}*/

thead.addEventListener('click', (elem) => {
  const item = elem.target;
  const sortedRows = Array.from(table.rows)
    .slice(1, -1).sort((a, b) => {
      switch (item.cellIndex) {
        case 0:
        case 1:
          return a.cells[item.cellIndex] > b.cells[item.cellIndex] ? 1 : -1;
      }
    });

  table.tBodies[0].append(...sortedRows);
/*
  switch (item.cellIndex) {
    case 0:
    case 1:
      const sortedRows = Array.from(table.rows)
        .slice(1, -1)
        .sort((rowA, rowB) =>
          rowA.cells[item.cellIndex].innerHTML
          > rowB.cells[item.cellIndex].innerHTML ? 1 : -1);

      table.tBodies[0].append(...sortedRows);
      break;
    case 2:
      const sortedRows2 = Array.from(table.rows)
        .slice(1, -1)
        .sort((rowA, rowB) =>
          Number(rowA.cells[item.cellIndex].innerHTML)
          - Number(rowB.cells[item.cellIndex].innerHTML));

      table.tBodies[0].append(...sortedRows2);
      break;
    case 3:
      const sortedRows3 = Array.from(table.rows)
        .slice(1, -1)
        .sort((rowA, rowB) =>
          convNumber(rowA.cells[item.cellIndex].innerHTML)
        - convNumber(rowB.cells[item.cellIndex].innerHTML));

      table.tBodies[0].append(...sortedRows3);
  } */
});
