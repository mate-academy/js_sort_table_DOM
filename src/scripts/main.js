'use strict';

const table = document.querySelector('table');
const headers = table.tHead;
const rows = [...table.tBodies[0].rows];

headers.addEventListener('click', event => {
  const sortBy = event.target.textContent;
  const columnIndex = event.target.cellIndex;

  sortTable(columnIndex, sortBy);
});

function sortTable(columnIndex, sortBy) {
  const sortedRows = rows.sort((a, b) => {
    let firstRow = a.cells[columnIndex].textContent;
    let secondRow = b.cells[columnIndex].textContent;

    if (sortBy === 'Salary') {
      firstRow = firstRow.replace(/[$,]/g, '');
      secondRow = secondRow.replace(/[$,]/g, '');

      return firstRow - secondRow;
    }

    return firstRow.localeCompare(secondRow, { numeric: true });
  });

  table.tBodies[0].append(...sortedRows);
}
