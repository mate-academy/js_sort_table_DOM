'use strict';

const table = document.querySelector('table');

table.addEventListener('click', function (e) {
  const headerCell = e.target.closest('thead th');

  if (headerCell) {
    const { cellIndex, textContent } = headerCell;
    const tbodyRows = [...table.querySelector('tbody').rows];

    tbodyRows.sort((rowA, rowB) => {
      const cellA = rowA.cells[cellIndex].textContent;
      const cellB = rowB.cells[cellIndex].textContent;
      const regExp = /[^0-9]/g;

      if (['Name', 'Position'].includes(textContent)) {
        return cellA.localeCompare(cellB);
      } else if (['Age', 'Salary'].includes(textContent)) {
        return +cellA.replace(regExp, '') - +cellB.replace(regExp, '');
      }
    });

    const tableBody = table.querySelector('tbody');

    tableBody.innerHTML = '';
    tbodyRows.forEach((row) => tableBody.appendChild(row));
  }
});
