'use strict';

const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');
const rows = [...tableBody.rows];

function convertToNumber(string) {
  return Number(string.replace(/[^\d]/g, ''));
}

table.addEventListener('click', event => {
  const index = event.target.cellIndex;

  rows.sort((a, b) => {
    const prevRow = a.cells[index].textContent;
    const nextRow = b.cells[index].textContent;

    if (prevRow.includes('$')) {
      return convertToNumber(prevRow) - convertToNumber(nextRow);
    } else if (Number(prevRow)) {
      return Number(prevRow) - Number(nextRow);
    } else {
      return prevRow.localeCompare(nextRow);
    }
  });

  table.append(...rows);
});
