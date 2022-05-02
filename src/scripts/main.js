'use strict';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');

function sortList(n) {
  return [...tbody.rows].sort((start, end) => {
    const a = start.cells[n].innerText.replace(/[$,]/g, '');
    const b = end.cells[n].innerText.replace(/[$,]/g, '');

    if (isNaN(a)) {
      return a.localeCompare(b);
    } else {
      return a - b;
    }
  });
};

table.addEventListener('click', e => {
  const item = e.target.closest('th');

  if (!item) {
    return;
  }

  const number = item.cellIndex;

  const newList = sortList(number);

  tbody.append(...newList);
});
