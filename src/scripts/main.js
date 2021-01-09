'use strict';

const mainTable = document.querySelector('table');
const theadClickArea = mainTable.querySelector('thead');
const bodyTable = mainTable.querySelector('tbody');

function userSort(table) {
  theadClickArea.addEventListener('click', (e) => {
    const mainTH = e.target.closest('th');
    const indexCol = mainTH.cellIndex;
    const allRows = [...bodyTable.children];

    if (!mainTH) {
      return;
    }

    allRows.sort((firstRow, secondRow) => {
      let argFirst = firstRow.cells[indexCol].innerText;
      let argSecond = secondRow.cells[indexCol].innerText;

      if (mainTH.innerText === 'Salary') {
        argFirst = +argFirst.match(/\d/g).join('');
        argSecond = +argSecond.match(/\d/g).join('');

        return argFirst - argSecond;
      } else {
        return argFirst > argSecond ? 1 : -1;
      }
    });

    allRows.map(row => bodyTable.append(row));
  });
}

userSort(mainTable);
