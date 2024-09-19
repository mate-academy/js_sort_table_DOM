/* eslint-disable no-console */
'use strict';

function convertToNumber(string) {
  return Number(string.replace(/[^0-9]+/g, ''));
}

function sortTable(tbody, columnIndex) {
  const rows = [...tbody.rows];

  const sortedRows = rows.sort((row1, row2) => {
    const cell1 = row1.cells[columnIndex].textContent.trim();
    const cell2 = row2.cells[columnIndex].textContent.trim();

    if (convertToNumber(cell1)) {
      return convertToNumber(cell1) - convertToNumber(cell2);
    } else {
      return cell1.localeCompare(cell2);
    }
  });

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  sortedRows.forEach((row) => tbody.appendChild(row));
}

const table = document.querySelector('table');
const headers = [...table.tHead.rows[0].cells];
const body = table.tBodies[0];

console.log(body);

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortTable(body, index);
  });
});
