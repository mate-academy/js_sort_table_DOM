'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = [...tbody.rows];

thead.addEventListener('click', event => {
  const index = event.target.cellIndex;

  const sortedRows = rows.sort((a, b) => {
    const firstRow = validateRow(a, index);
    const secondRow = validateRow(b, index);

    if (+firstRow) { // NaN or Number
      return firstRow - secondRow;
    }

    return firstRow.localeCompare(secondRow);
  });

  tbody.append(...sortedRows);
});

function validateRow(row, index) {
  return row.cells[index].textContent.replace(/[,$]/g, '');
}
