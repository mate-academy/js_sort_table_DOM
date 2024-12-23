'use strict';

function sortTableBody(tBody, column) {
  const sortedRows = [...tBody.rows].sort((rowA, rowB) => {
    if (column < 2) {
      const stringA = rowA.cells[column].textContent;
      const stringB = rowB.cells[column].textContent;

      return stringA.localeCompare(stringB);
    }

    const numA = rowA.cells[column].textContent.replace(/[^0-9.-]+/g, '');
    const numB = rowB.cells[column].textContent.replace(/[^0-9.-]+/g, '');

    return numA - numB;
  });

  tBody.append(...sortedRows);
}

const table = document.querySelector('table');

[...table.tHead.rows[0].cells].forEach((cell, i) => {
  cell.addEventListener('click', () => {
    sortTableBody(table.tBodies[0], i);
  });
});
