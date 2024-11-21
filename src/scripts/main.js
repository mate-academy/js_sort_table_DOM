'use strict';

function makeNumber(str) {
  return Number(str.replace(/[$,]/g, ''));
}

const table = document.querySelector('table');

const headers = document.querySelectorAll('th');

headers.forEach((header) => {
  header.addEventListener('click', () => {
    const headerIndex = header.cellIndex;
    const tableBody = table.querySelector('tbody');
    const tableRows = Array.from(tableBody.querySelectorAll('tr'));

    const sortedRows = tableRows.sort((a, b) => {
      const aContent = a.cells[headerIndex].textContent;
      const bContent = b.cells[headerIndex].textContent;

      if (headerIndex === 0 || headerIndex === 1) {
        return aContent.localeCompare(bContent);
      } else if (headerIndex === 2) {
        return Number(aContent) - Number(bContent);
      } else if (headerIndex === 3) {
        return makeNumber(aContent) - makeNumber(bContent);
      }
    });

    tableBody.innerHTML = '';

    sortedRows.forEach((row) => {
      tableBody.appendChild(row);
    });
  });
});
