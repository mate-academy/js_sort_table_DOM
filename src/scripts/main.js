'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHead.addEventListener('click', (e) => {
  const index = e.target.cellIndex;

  const sorted = [...tableBody.children].sort((a, b) => {
    let itemA = a.cells[index].innerText;
    let itemB = b.cells[index].innerText;

    if (itemA.includes('$')) {
      itemA = itemA.replace(/[$,]/g, '');
      itemB = itemB.replace(/[$,]/g, '');

      return itemA - itemB;
    }

    return itemA.localeCompare(itemB);
  });

  tableBody.append(...sorted);
});
