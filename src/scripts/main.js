'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const rows = tbody.rows;

function getToNumber(str) {
  return str.split('$').join('').split(',').join('');
}

thead.addEventListener('click', e => {
  const targeted = e.target.closest('th');

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
