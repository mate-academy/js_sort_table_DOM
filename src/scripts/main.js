'use strict';

const table = document.querySelector('table');

table.addEventListener('click', e => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const th = e.target;

  const sortTable = (colNum) => {
    const list = table.querySelector('tbody');
    const rowsArray = [...list.rows];

    switch (colNum) {
      case 0:
      case 1:
        rowsArray.sort((rowA, rowB) => {
          const a = rowA.cells[colNum].innerHTML;
          const b = rowB.cells[colNum].innerHTML;

          return a.localeCompare(b);
        });
        break;

      case 2:
        rowsArray.sort((rowA, rowB) => {
          return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
        });
        break;

      case 3:

        rowsArray.sort((rowA, rowB) => {
          const a = +rowA.cells[colNum].innerHTML.replace(/[$,]/g, '');
          const b = +rowB.cells[colNum].innerHTML.replace(/[$,]/g, '');

          return a - b;
        });
        break;
    }

    list.append(...rowsArray);
  };

  sortTable(th.cellIndex);
});
