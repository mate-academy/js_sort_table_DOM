'use strict';

const table = document.querySelector('table');
const header = document.querySelector('thead tr');

header.addEventListener('click', (e) => {
  const tableData = [...table.tBodies[0].rows];

  const sortedRows = tableData.sort((rowA, rowB) => {
    const rowOne = rowA.cells[e.target.cellIndex].innerHTML;
    const rowTwo = rowB.cells[e.target.cellIndex].innerHTML;

    if (rowOne.includes('$')) {
      const modRowOne = rowOne.replaceAll(',', '.').split('').slice(1).join('');
      const modRowTwo = rowTwo.replaceAll(',', '.').split('').slice(1).join('');

      return modRowOne - modRowTwo;
    }

    return rowOne.localeCompare(rowTwo);
  });

  table.tBodies[0].append(...sortedRows);
});
