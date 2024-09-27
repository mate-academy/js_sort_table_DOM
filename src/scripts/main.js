'use strict';

const table = document.querySelector('table');

// eslint-disable-next-line no-shadow
document.addEventListener('click', event => {
  const item = event.target;
  const head = item.closest('thead');

  if (!head) {
    return;
  }

  const colIndex = item.cellIndex;
  const tBody = table.tBodies[0];

  const rows = [...tBody.rows];

  rows.sort((a, b) => {
    const cellA = a.cells[colIndex].textContent;
    const cellB = b.cells[colIndex].textContent;

    switch (colIndex) {
      case 0:
      case 1:
      default:
        return cellA.localeCompare(cellB);

      case 2:
      case 3:
        const numA = +cellA.replace(/\D/g, '');
        const numB = +cellB.replace(/\D/g, '');

        return numA - numB;
    }
  });

  rows.forEach(row => tBody.appendChild(row));
});
