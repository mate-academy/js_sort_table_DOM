'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');

thead.addEventListener('click', (e) => {
  /**
   * @type {HTMLTableCellElement}
   */
  const cellHead = e.target.closest('th');

  if (cellHead === null) {
    return;
  }

  const indexColumn = cellHead.cellIndex;
  const isNumberColumn =
    cellHead.textContent.trim() === 'Age' ||
    cellHead.textContent.trim() === 'Salary';

  const bodyRows = [...tbody.rows];

  bodyRows.sort((rowA, rowB) => {
    const cellA = rowA.cells[indexColumn].textContent.trim();
    const cellB = rowB.cells[indexColumn].textContent.trim();

    if (isNumberColumn) {
      return strToNumber(cellA) - strToNumber(cellB);
    }

    return cellA.localeCompare(cellB);
  });

  tbody.append(...bodyRows);
});

function strToNumber(str) {
  return Number(str.replace(/[^\d.-]/g, ''));
}
