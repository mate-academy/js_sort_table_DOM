'use strict';

const table = document.querySelector('table');
const titleRow = document.querySelectorAll('th');
const tableHeader = document.querySelector('thead');

for (const cell of titleRow) {
  cell.setAttribute('data-name', `${cell.innerText}`);
}

table.addEventListener('click', e => {
  const th = e.target;

  if (e.target.tagName !== 'TH' || !tableHeader.contains(th)) {
    return;
  }

  sortGrid(th.cellIndex, th.dataset.name);
});

function sortGrid(colNum, attribute) {
  const tbody = table.querySelector('tbody');

  const rowsArray = Array.from(tbody.rows);

  let compare;

  switch (attribute) {
    case 'Position':
    case 'Name':
      compare = function(rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML
          ? 1 : -1;
      };
      break;

    case 'Age':
      compare = function(rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;

    default:
      compare = function(rowA, rowB) {
        const number1
        = Number(rowA.cells[colNum].innerHTML.slice(1).split(',').join(''));
        const number2
        = Number(rowB.cells[colNum].innerHTML.slice(1).split(',').join(''));

        return number1 - number2;
      };
  }

  rowsArray.sort(compare);

  tbody.append(...rowsArray);
}
