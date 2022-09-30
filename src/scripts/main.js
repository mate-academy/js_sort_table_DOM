'use strict';

const table = document.querySelector('table');

table.onclick = function(e) {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const th = e.target;

  sortTable(th.cellIndex, th);
};

function sortTable(colNum, target) {
  const tbody = table.querySelector('tbody');
  const rowsArray = Array.from(tbody.rows);
  let compare;

  switch (target.textContent) {
    case 'Name':
    case 'Position':
      compare = function(rowA, rowB) {
        return rowA.cells[colNum].innerHTML
          .localeCompare(rowB.cells[colNum].innerHTML);
      };
      break;

    case 'Age':
      compare = function(rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;

    case 'Salary':
      compare = function(rowA, rowB) {
        return getSalary(rowA.cells[colNum].innerHTML)
          - getSalary(rowB.cells[colNum].innerHTML);
      };
      break;
  }

  rowsArray.sort(compare);
  tbody.append(...rowsArray);
}

function getSalary(row) {
  return Number(row.slice(1).split(',').join('.'));
}
