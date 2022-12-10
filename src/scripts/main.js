'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th || !table.contains(th)) {
    return;
  }

  sorter(th.cellIndex, th.textContent);
});

function sorter(columnNumber, sortBy) {
  const tbody = table.querySelector('tbody');

  const rowsArray = [...tbody.rows];

  let compare;

  switch (sortBy.toLowerCase()) {
    case 'age':
      compare = function(rowA, rowB) {
        return +rowA.cells[columnNumber].innerHTML
          - +rowB.cells[columnNumber].innerHTML;
      };
      break;

    case 'salary':
      compare = function(rowA, rowB) {
        return convertSalary(rowA.cells[columnNumber].innerHTML)
          - convertSalary(rowB.cells[columnNumber].innerHTML);
      };
      break;

    default:
      compare = function(rowA, rowB) {
        return rowA.cells[columnNumber].innerHTML
          > rowB.cells[columnNumber].innerHTML ? 1 : -1;
      };
      break;
  }

  rowsArray.sort(compare);
  tbody.append(...rowsArray);
}

function convertSalary(str) {
  return str.slice(1).replace(',', '.') * 1000;
}
