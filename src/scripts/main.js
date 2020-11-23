'use strict';

const tHead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rowsArray = Array.from(tbody.rows);

tHead.addEventListener('click', (e) => {
  const th = e.target;

  function sortTable(colNum = 0) {
    const compare = function(rowA, rowB) {
      if (rowA.cells[colNum].innerHTML.charAt(0) === '$') {
        return rowA.cells[colNum].innerHTML
          .split('$').join('').split(',').join('.')
        - rowB.cells[colNum].innerHTML
          .split('$').join('').split(',').join('.');
      }

      return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML
        ? 1 : -1;
    };

    rowsArray.sort(compare);

    tbody.append(...rowsArray);
  }

  sortTable(th.cellIndex, th.dataset.type);
});
