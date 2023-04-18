'use strict';

const table = document.querySelector('table');

const headerRow = table.querySelector('thead tr');
const headerCells = headerRow.querySelectorAll('th');

const bodyRows = table.querySelectorAll('tbody tr');

headerCells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    const column = index;
    const ascending = true;
    const sortedRows = Array.from(bodyRows).sort((a, b) => {
      const aValue = a.querySelectorAll('td')[column].textContent.trim();
      const bValue = b.querySelectorAll('td')[column].textContent.trim();

      if (ascending) {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });

    sortedRows.forEach((sortedRow) => {
      table.querySelector('tbody').appendChild(sortedRow);
    });
  });
});
