'use strict';

const table = document.querySelector('table');
const headRow = table.tHead;
const body = table.tBodies[0];
const makeComparator = (first, second, idx) => {
  let firstValue = first.children[idx].innerText;
  let secondValue = second.children[idx].innerText;

  if (firstValue[0] === '$') {
    firstValue = firstValue.slice(1).split(',').join('');
    secondValue = secondValue.slice(1).split(',').join('');
  }

  if (/^\d+$/.test(firstValue)) {
    return Number(firstValue) - Number(secondValue);
  }

  return firstValue.localeCompare(secondValue);
};

headRow.addEventListener('click', e => {
  const currentCell = e.target;
  const currentColumn = currentCell.cellIndex;
  const sortedColumn = [...body.rows];

  sortedColumn.sort((a, b) => makeComparator(a, b, currentColumn));
  body.append(...sortedColumn);
});
