'use strict';

const table = document.querySelector('table');
const header = table.querySelector('thead');
const headerRow = header.rows[0];
const headerCells = headerRow.cells;
const body = table.querySelector('tbody');
const bodyRows = body.querySelectorAll('tr');

Array.from(headerCells).forEach((element) => {
  element.addEventListener('click', (e) => {
    const cellNumber = element.cellIndex;

    const sortedRows = Array.from(bodyRows).sort((a, b) => {
      const aText = a.cells[cellNumber].textContent;
      const bText = b.cells[cellNumber].textContent;
      const sortedNumbers =
        parseFloat(aText.replace(/[^0-9.]/g, '')) -
        parseFloat(bText.replace(/[^0-9.]/g, ''));

      if (element.textContent === 'Salary') {
        return sortedNumbers;
      } else {
        return aText.localeCompare(bText);
      }
    });

    sortedRows.forEach((row) => body.append(row));
  });
});
