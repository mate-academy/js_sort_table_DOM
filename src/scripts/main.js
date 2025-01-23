'use strict';

const table = document.querySelector('table');
const header = table.querySelector('thead');
const body = table.querySelector('tbody');

const headerCells = header.querySelectorAll('th');

headerCells.forEach((element, elemIndex) => {
  element.addEventListener('click', () => {
    const rows = Array.from(body.querySelectorAll('tr'));

    const sortedRows = rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[elemIndex].innerText.trim().replace(/[$,]/g, '');
      const cellB = rowB.cells[elemIndex].innerText.trim().replace(/[$,]/g, '');

      const isNumber = !isNaN(cellA) && !isNaN(cellB);

      if (isNumber) {
        return parseFloat(cellA) - parseFloat(cellB);
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    // eslint-disable-next-line no-console
    console.log(sortedRows);
    body.innerHTML = '';
    sortedRows.forEach((row) => body.appendChild(row));
  });
});
