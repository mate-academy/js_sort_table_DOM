'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const th = e.target;

  sortColumns(th.cellIndex, th.innerHTML);
});

function sortColumns(colNum, title) {
  const body = table.querySelector('tbody');
  const rowsArray = Array.from(body.rows);
  let compare;

  switch (title) {
    case 'Name':
    case 'Position':
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML
          ? 1
          : -1;
      };
      break;

    case 'Age':
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;

    case 'Salary':
      compare = function (rowA, rowB) {
        return (
          rowA.cells[colNum].innerHTML.replace(/[$,]/g, '') -
          rowB.cells[colNum].innerHTML.replace(/[$,]/g, '')
        );
      };
      break;
  }

  rowsArray.sort(compare);
  body.append(...rowsArray);
}
