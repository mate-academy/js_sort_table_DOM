'use strict';

const table = document.querySelector('table');
const tableBody = table.tBodies[0];

table.tHead.addEventListener('click', (event) => {
  const sortedCellIndex = event.target.cellIndex;

  const sortedRows = [...tableBody.rows].sort((firstRow, secondRow) => {
    const firstRowText = firstRow.cells[sortedCellIndex].textContent;
    const secondRowText = secondRow.cells[sortedCellIndex].textContent;

    if (getNumber(firstRowText)) {
      return getNumber(firstRowText) - getNumber(secondRowText);
    }

    return firstRowText.localeCompare(secondRowText);
  });

  tableBody.append(...sortedRows);
});

function getNumber(string) {
  return +string.replace(/\D*/g, '');
};
