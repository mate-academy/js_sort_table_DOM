'use strict';

const head = document.querySelector('thead');
const body = document.querySelector('tbody');

head.addEventListener('click', (e) => {
  const target = e.target.closest('th');

  if (target) {
    const index = target.cellIndex;

    sort(index);
  }
});

function sort(index) {
  const rows = Array.from(body.rows);

  rows.sort((a, b) => {
    const cellA = a.cells[index].textContent;
    const cellB = b.cells[index].textContent;

    const cleanA = cellA.replace(/[^0-9.-]/g, '');
    const cleanB = cellB.replace(/[^0-9.-]/g, '');

    if (cleanA !== '' && cleanB !== '' && !isNaN(cleanA) && !isNaN(cleanB)) {
      return Number(cleanA) - Number(cleanB);
    }

    return cellA.localeCompare(cellB);
  });

  body.append(...rows);
}
