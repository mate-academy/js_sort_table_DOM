'use strict';

const table = document.querySelector('table');
const rows = [...table.rows];

function toNumber(str) {
  const num = parseFloat(str.replace(/[$,]/g, ''));

  return isNaN(num) ? str.trim().toLowerCase() : num;
}

// eslint-disable-next-line no-shadow
table.addEventListener('click', (event) => {
  const thead = event.target.closest('th');

  if (thead) {
    const index = thead.cellIndex;
    const newCells = [];

    for (let i = 1; i < rows.length - 1; i++) {
      const row = rows[i];
      const cell = row.cells[index];

      newCells.push(cell.cloneNode(true));
    }

    newCells.sort((a, b) => {
      const cellA = a.textContent.trim();
      const cellB = b.textContent.trim();

      if (!isNaN(toNumber(cellA)) && !isNaN(toNumber(cellB))) {
        return toNumber(cellA) - toNumber(cellB);
      }

      return cellA.localeCompare(cellB);
    });

    newCells.forEach((sortCell, i) => {
      rows[i + 1].cells[index].replaceWith(sortCell);
    });
  }
});
