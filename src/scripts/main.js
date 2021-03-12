'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const rows = [...tbody.rows];

function getSalaryAmount(salary) {
  return Number(salary
    .split('$')
    .join('')
    .split(',')
    .join('')
  );
}

function getSortedData(column) {
  const index = column.cellIndex;
  const contentOfTheFirstCell = rows[0].cells[index].textContent;

  const sortedRows = rows.sort((cellA, cellB) => {
    const cellFirst = cellA.cells[index].textContent;
    const cellSecond = cellB.cells[index].textContent;

    if (contentOfTheFirstCell.includes('$')) {
      const valueFirst = getSalaryAmount(cellFirst);
      const valueSecond = getSalaryAmount(cellSecond);

      return valueFirst > valueSecond ? 1 : -1;
    }

    if (Number(contentOfTheFirstCell)) {
      const valueFirst = Number(cellFirst);
      const valueSecond = Number(cellSecond);

      return valueFirst > valueSecond ? 1 : -1;
    }

    return cellFirst > cellSecond ? 1 : -1;
  });

  tbody.append(...sortedRows);
}

table.addEventListener('click', (clickEvent) => {
  if (table.tHead.contains(clickEvent.target)) {
    getSortedData(clickEvent.target);
  }
});
