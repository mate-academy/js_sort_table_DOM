'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHead.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const columnIndex = e.target.cellIndex;

    sortTable(columnIndex);
  }
});

function sortTable(columnIndex) {
  const tableRowsArray = Array.from(document.querySelectorAll('tbody tr'));

  tableRowsArray.sort((firstRow, secondRow) => {
    const firstValue = getCellValue(firstRow, columnIndex);
    const secondValue = getCellValue(secondRow, columnIndex);

    return typeof firstValue === 'string'
      ? firstValue.localeCompare(secondValue)
      : firstValue - secondValue;
  });

  tableBody.append(...tableRowsArray);
}

function getCellValue(row, columnIndex) {
  const cell = row.cells[columnIndex];
  const content = cell.textContent;
  const isAgeColumn = columnIndex === 2;
  const isSalaryColumn = columnIndex === 3;

  if (isAgeColumn) {
    return Number(content);
  } else if (isSalaryColumn) {
    return parseFloat(content.replace(/[$,]/g, ''));
  } else {
    return content.toLowerCase();
  }
}
