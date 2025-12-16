'use strict';

const table = document.querySelector('table');
const header = document.querySelector('thead tr');

header.addEventListener('click', (e) => {
  const tableData = [...table.tBodies[0].rows];

  const sortedRows = tableData.sort((rowA, rowB) => {
    const rowOne = rowA.cells[e.target.cellIndex].innerHTML;
    const rowTwo = rowB.cells[e.target.cellIndex].innerHTML;

    if (rowOne.includes('$')) {
      const modRowOne = rowOne.replaceAll(',', '').slice(1);
      const modRowTwo = rowTwo.replaceAll(',', '').slice(1);

      return modRowOne - modRowTwo;
    }

    return rowOne.localeCompare(rowTwo);
  });

  table.tBodies[0].append(...sortedRows);
});
