'use strict';

const table = document.querySelector('table');
const tableHead = table.tHead;
const tableBody = table.tBodies[0];

tableHead.addEventListener('click', event => {
  const target = event.target;

  const indexOfCellToSort = target.cellIndex;
  const tableRows = [ ...tableBody.rows ];
  const sortBy = target.textContent;

  sortTable(tableRows, indexOfCellToSort, sortBy);
});

function sortTable(list, indexOfCellToSort, sortBy) {
  list.sort((previous, current) => {
    let previousRow = previous.cells[indexOfCellToSort].textContent;
    let currentRow = current.cells[indexOfCellToSort].textContent;

    switch (sortBy) {
      case 'Age':
        previousRow = parseInt(previousRow);
        currentRow = parseInt(currentRow);

        return previousRow - currentRow;

      case 'Salary':
        previousRow = parseInt(
          previousRow.slice(1).split(',').join('')
        );

        currentRow = parseInt(
          currentRow.slice(1).split(',').join('')
        );

        return previousRow - currentRow;

      default:
        return previousRow.localeCompare(currentRow);
    }
  });

  tableBody.append(...list);
}
