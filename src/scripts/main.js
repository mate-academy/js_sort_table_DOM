'use strict';

const table = document.querySelector('table');
const rows = [...table.tBodies[0].rows];

table.addEventListener('click', event => {
  const sortBy = event.target.textContent;
  const index = event.target.cellIndex;

  sortTable(index, sortBy);
});

function sortTable(index, sortBy) {
  const sortedRows = rows.sort((a, b) => {
    let firstRow = a.cells[index].textContent;
    let secondRow = b.cells[index].textContent;

    if (sortBy === 'Salary') {
      firstRow = firstRow.replace(/[$,]/g, '');
      secondRow = secondRow.replace(/[$,]/g, '');

      return firstRow - secondRow;
    }

    return firstRow.localeCompare(secondRow, { numeric: true });
  });

  for (const row of sortedRows) {
    table.tBodies[0].append(row);
  }
}
