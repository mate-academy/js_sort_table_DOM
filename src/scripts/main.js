'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');

thead.addEventListener('click', (event) => {
  const th = event.target;
  const cellIndex = th.cellIndex;

  sortTableByColumn(cellIndex, th.dataset.type);
});

function sortTableByColumn(columnIndex, type) {
  const rows = [...tbody.rows];

  let compareFunction;

  switch (type) {
    case 'string':
      compareFunction = (a, b) =>
        a.cells[columnIndex].textContent.localeCompare(
          b.cells[columnIndex].textContent
        );
      break;
    case 'number':
      compareFunction = (a, b) =>
        Number(a.cells[columnIndex].textContent)
          - Number(b.cells[columnIndex].textContent);
      break;
    case 'currency':
      compareFunction = (a, b) =>
        toNumber(a.cells[columnIndex].textContent)
        - toNumber(b.cells[columnIndex].textContent);
  }

  rows.sort(compareFunction);
  tbody.append(...rows);
}

function toNumber(str) {
  return +str.replace('$', '').replace(',', '');
}
