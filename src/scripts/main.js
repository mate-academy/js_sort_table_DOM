'use strict';

function toNumber(value) {
  return Number(value.replaceAll('$', '').replaceAll(',', ''));
}

function sortTable(columnIndex) {
  const bodyTable = document.querySelector('tbody');
  const arrRows = [...bodyTable.rows];

  arrRows.sort((a, b) => {
    const textA = a.cells[columnIndex].textContent;
    const textB = b.cells[columnIndex].textContent;

    const numA = toNumber(textA);
    const numB = toNumber(textB);

    if (!Number.isNaN(numA) && !Number.isNaN(numB)) {
      return numA - numB;
    }

    return textA.localeCompare(textB);
  });

  bodyTable.append(...arrRows);
}

document.querySelector('thead').addEventListener('click', (e) => {
  const cell = e.target.closest('th');

  if (!cell) {
    return;
  }

  sortTable(cell.cellIndex);
});
