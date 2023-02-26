'use strict';

const tBody = document.querySelector('tbody');

const data = [...tBody.children];

const titles = document.querySelectorAll('th');

function sortFn(cellIndex) {
  data.sort((a, b) => {
    const contentA = a.cells[cellIndex].innerHTML;
    const contentB = b.cells[cellIndex].innerHTML;

    if (cellIndex === 2) {
      return contentA - contentB;
    }

    if (cellIndex === 3) {
      return getNumber(contentA) - getNumber(contentB);
    }

    return contentA.localeCompare(contentB);
  });
};

function getNumber(arg) {
  return Number(arg.replace(',', '').replace('$', ''));
}

titles.forEach(th => th.addEventListener('click', (e) => {
  sortFn(e.target.cellIndex);

  tBody.append(...data);
}));
