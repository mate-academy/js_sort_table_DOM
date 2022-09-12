'use strict';

const table = document.querySelector('table');
const rows = [ ...table.tBodies[0].children ];

function ascSort(array, index) {
  array.sort((a, b) => {
    const itemA = a.children[index].textContent;
    const itemB = b.children[index].textContent;

    if (itemA.startsWith('$')) {
      return parseFloat(itemA.slice(1)) - parseFloat(itemB.slice(1));
    }

    if (isNaN(itemA)) {
      return itemA.localeCompare(itemB);
    }

    return itemA - itemB;
  }).forEach(item => table.tBodies[0].appendChild(item));
}

table.addEventListener('click', e => {
  const index = e.target.cellIndex;

  if (!e.target.matches('th') || e.target.closest('tfoot')) {
    return;
  }

  ascSort(rows, index);
});
