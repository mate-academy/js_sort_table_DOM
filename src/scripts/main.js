'use strict';

const tbody = document.querySelector('tbody');
const rows = document.querySelector('tbody').rows;
const table = document.querySelector('table');

function getToNumber(str) {
  return str.split('$').join('').split(',').join('');
}

table.addEventListener('click', e => {
  const targeted = e.target.closest('th');

  if (!targeted) {
    return;
  }

  const cellIndex = targeted.cellIndex;

  const sorted = [...rows].sort((a, b) => {
    const first = getToNumber(a.cells[cellIndex].textContent);
    const second = getToNumber(b.cells[cellIndex].textContent);

    if (isNaN(first)) {
      return first.localeCompare(second);
    } else {
      return first - second;
    }
  });

  tbody.append(...sorted);
});
