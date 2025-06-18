'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const th = e.target;

    sortGrid(th.cellIndex, th.dataset.type);
  }
});

function sortGrid(colNum, type) {
  const tbody = document.querySelector('tbody');
  const rowsArr = Array.from(tbody.rows);

  let compare;

  switch (type) {
    case 'number':
      compare = function (rowA, rowB) {
        const a =
          parseFloat(rowA.cells[colNum].innerHTML.replace(/[^\d.-]/g, '')) || 0;
        const b =
          parseFloat(rowB.cells[colNum].innerHTML.replace(/[^\d.-]/g, '')) || 0;

        return a - b;
      };
      break;
    case 'string':
    default:
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML.localeCompare(
          rowB.cells[colNum].innerHTML,
        );
      };
      break;
  }

  rowsArr.sort(compare);

  tbody.append(...rowsArr);
}
