'use strict';

// write code here
const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const heads = tHead.querySelectorAll('th');
const rows = Array.from(tBody.querySelectorAll('tr'));

const sortRows = (column) =>
  rows.sort((a, b) => {
    const trimVal = (val) => {
      let value = val
        .querySelector(`td:nth-child(${column + 1})`)
        .textContent.trim();

      if (value[0] === '$') {
        value = Number(value.replace(/[^0-9.-]+/g, ''));
      }

      return value;
    };
    const aTrimmed = trimVal(a);
    const bTrimmed = trimVal(b);

    if (typeof aTrimmed === 'string') {
      return aTrimmed.localeCompare(bTrimmed);
    }

    return aTrimmed - bTrimmed;
  });

const rebuildTable = (column) => {
  const sortedRows = sortRows(column);

  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }
  tBody.append(...sortedRows);
};

for (const cell of heads) {
  cell.addEventListener('click', (e) => {
    rebuildTable(e.target.cellIndex);
  });
}
