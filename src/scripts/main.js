'use strict';

const table = document.querySelector('table');
const tableBody = table.tBodies[0];
const rows = [...tableBody.rows];
const tableHead = table.tHead;

function normalizeNumber(row, cellIndex) {
  return Number(
    row.cells[cellIndex].textContent.replace(/[^0-9]/g, '')
  );
}

function sortRows(selectedElement) {
  const cellIndex = selectedElement.cellIndex;
  const columnName = selectedElement.textContent;

  switch (columnName) {
    case 'Salary':
    case 'Age':
      rows.sort((currentRow, nextRow) => {
        return normalizeNumber(currentRow, cellIndex)
          - normalizeNumber(nextRow, cellIndex);
      });

      break;
    default:
      rows.sort((currentRow, nextRow) => {
        return currentRow.cells[cellIndex].textContent.localeCompare(
          nextRow.cells[cellIndex].textContent);
      });
  }
}

tableHead.addEventListener('click', (clickEvent) => {
  sortRows(clickEvent.target);

  tableBody.append(...rows);

  table.append(tableBody);
});
