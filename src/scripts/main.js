'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  const target = e.target.closest('th');

  if (!target) {
    return;
  }

  const tbody = table.tBodies;

  const sorted = [...tbody[0].children].sort((a, b) => {
    let itemA = a.cells[target.cellIndex].innerHTML;
    let itemB = b.cells[target.cellIndex].innerHTML;

    if (itemA.charAt(0) === '$') {
      itemA = +itemA.slice(1).split(',').join('');
      itemB = +itemB.slice(1).split(',').join('');

      return itemA - itemB;
    }

    return itemA.localeCompare(itemB);
  });

  sorted.forEach(el => {
    tbody[0].append(el);
  });
});
