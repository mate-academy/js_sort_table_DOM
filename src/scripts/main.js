'use strict';

const tableHead = document.querySelector('thead');
const tableValue = [...document.querySelector('tbody').rows];
const table = document.querySelector('table');

tableHead.addEventListener('click', e => {
  const index = e.target.cellIndex;

  const sorted = tableValue.sort((a, b) => {
    let copyA = a.cells[index].innerHTML;
    let copyB = b.cells[index].innerHTML;

    if (copyA[0] === '$') {
      copyA = +copyA.slice(1).split(',').join('');
      copyB = +copyB.slice(1).split(',').join('');

      return copyA - copyB;
    }

    if (+copyA) {
      return copyA - copyB;
    }

    return copyA.localeCompare(copyB);
  });

  table.tBodies[0].append(...sorted);
});
