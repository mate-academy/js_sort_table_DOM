'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHead.addEventListener('click', (e) => {
  const item = e.target.cellIndex;

  const sorted = [...tableBody.children].sort((a, b) => {
    let itemA = a.cells[item].innerText;
    let itemB = b.cells[item].innerText;

    if (itemA.includes('$')) {
      itemA = itemA.replace(/[$,]/g, '');
      itemB = itemB.replace(/[$,]/g, '');

      return itemA - itemB;
    }

    return itemA.localeCompare(itemB);
  });

  tableBody.append(...sorted);
});
