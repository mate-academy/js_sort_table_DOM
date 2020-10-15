'use strict';

const table = document.querySelector('table');
const tableBody = table.tBodies[0];

table.tHead.addEventListener('click', (event) => {
  const sortedCellIndex = event.target.cellIndex;

  const sortedRows = [...tableBody.rows].sort((firstRow, secondRow) => {
    const firstRowText = firstRow.cells[sortedCellIndex].textContent;
    const secondRowText = secondRow.cells[sortedCellIndex].textContent;

    if (+firstRowText.replace(/\D*/g, '')) {
      const firstNumber = +firstRowText.replace(/\D*/g, '');
      const secondNumber = +secondRowText.replace(/\D*/g, '');

      return firstNumber - secondNumber;
    }

    return firstRowText.localeCompare(secondRowText);
  });

  tableBody.append(...sortedRows);
});
