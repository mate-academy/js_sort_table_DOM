'use strict';

const headersArray = document.querySelectorAll('th');

headersArray.forEach((header) => {
  header.addEventListener('click', () => {
    const table = header.closest('table');
    const columnIndex = header.cellIndex;
    const rowsArray = Array.from(document.querySelectorAll('table tbody tr'));

    const isNumericColumn = ['Age', 'Salary'].includes(header.innerText);

    rowsArray.sort((rowA, rowB) => {
      let cellA = rowA.cells[columnIndex].innerText.trim();
      let cellB = rowB.cells[columnIndex].innerText.trim();

      if (isNumericColumn) {
        cellA = cellA.replace('$', '').replace(',', '');
        cellB = cellB.replace('$', '').replace(',', '');

        const numA = +cellA;
        const numB = +cellB;

        return numA - numB;
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    const fragment = document.createDocumentFragment();

    rowsArray.forEach((row) => {
      fragment.appendChild(row);
    });

    table.querySelector('tbody').appendChild(fragment);
  });
});
