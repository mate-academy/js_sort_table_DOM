'use strict';

const tHeader = document.querySelector('thead');
const tBodyRows = document.querySelector('tbody').rows;

tHeader.addEventListener('click', (e) => {
  const sortColumnIndex = findColumnIndex(tHeader, e.target.innerText);
  const columnCells = [...tBodyRows].map((row) => {
    return row.cells[sortColumnIndex];
  });
  const sortedColumn = sortColumn(columnCells);

  [...tBodyRows].forEach((row, index) => {
    const beforeTargetElement = row.cells[sortColumnIndex - 1] || row.cells[0];

    beforeTargetElement.after(sortedColumn[index]);
  });
});

function sortColumn(cells) {
  return [...cells].sort((a, b) => {
    const pureAValue = convertRawInput(a);
    const pureBValue = convertRawInput(b);

    return !isNaN(pureAValue)
      ? pureAValue - pureBValue
      : pureAValue.localeCompare(pureBValue);
  });
}

function convertRawInput(cell) {
  const regex = new RegExp('[$,]', 'g');

  return String(cell.innerText).replaceAll(regex, '');
}

function findColumnIndex(header, columnTitle) {
  return [...header.rows[0].cells].map(element => element.innerText)
    .indexOf(columnTitle);
}
