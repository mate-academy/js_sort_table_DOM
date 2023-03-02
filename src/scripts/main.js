'use strict';

const table = document.querySelector('table');
const tHead = document.querySelector('thead');
const tBodyRows = [...document.querySelector('tbody').rows];

tHead.addEventListener('click', e => {
  const index = e.target.cellIndex;

  const sorted = tBodyRows.sort((a, b) => {
    let contentA = a.cells[index].innerHTML;
    let contentB = b.cells[index].innerHTML;

    if (contentA[0] === '$') {
      contentA = +contentA.slice(1).split(',').join('');
      contentB = +contentB.slice(1).split(',').join('');

      return contentA - contentB;
    }

    if (+contentA) {
      return contentA - contentB;
    }

    return contentA.localeCompare(contentB);
  });

  table.tBodies[0].append(...sorted);
});
