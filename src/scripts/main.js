'use strict';

const table = document.querySelector('table');
const tableBody = table.querySelector('tbody');
const tableRows = Array.from(tableBody.querySelectorAll('tr'));
const tableHeaders = Array.from(document.querySelectorAll('th'));

function getNumber(string) {
  const number = +string.replace('$', '').split(',').join('');

  return number;
}

tableHeaders.forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    tableRows.sort((rowA, rowB) => {
      const cellA = rowA.cells[columnIndex].textContent;
      const cellB = rowB.cells[columnIndex].textContent;

      if (!isNaN(getNumber(cellA)) && !isNaN(getNumber(cellB))) {
        return getNumber(cellA) - getNumber(cellB);
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    tableRows.forEach((row) => {
      tableBody.appendChild(row);
    });
  });
});
