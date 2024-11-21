'use strict';

'use strict';

const grid = document.querySelector('table');

grid.onclick = function (e) {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const th = e.target;
  const colNum = th.cellIndex;
  const type = getColumnType(colNum);

  sortGrid(colNum, type);
};

function getColumnType(colNum) {
  const tbody = grid.querySelector('tbody');
  const firstRow = tbody.rows[0];
  const cellContent = firstRow.cells[colNum].textContent;

  if (cellContent.includes('$')) {
    return 'currency';
  }

  return isNaN(cellContent) ? 'string' : 'number';
}

function sortGrid(colNum, type) {
  const tbody = grid.querySelector('tbody');
  const rowsArray = Array.from(tbody.rows);

  let compare;

  switch (type) {
    case 'number':
      compare = function (rowA, rowB) {
        return (
          parseFloat(rowA.cells[colNum].textContent) -
          parseFloat(rowB.cells[colNum].textContent)
        );
      };
      break;
    case 'string':
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].textContent.localeCompare(
          rowB.cells[colNum].textContent,
        );
      };
      break;
    case 'currency':
      compare = function (rowA, rowB) {
        const valA = parseFloat(
          rowA.cells[colNum].textContent.replace(/[$,]/g, ''),
        );
        const valB = parseFloat(
          rowB.cells[colNum].textContent.replace(/[$,]/g, ''),
        );

        return valA - valB;
      };
      break;
  }

  rowsArray.sort(compare);

  tbody.append(...rowsArray);
}
