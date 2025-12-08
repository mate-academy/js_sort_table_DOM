'use strict';

const table = document.querySelector('table');
const tHead = table.tHead;
const tBody = table.tBodies[0];

tHead.addEventListener('click', (e) => {
  const rows = [...tBody.rows];
  const th = e.target.closest('th');
  const thIndex = th.cellIndex;

  rows.sort((firstRow, secondRow) => {
    const firstValue = firstRow.cells[thIndex].textContent;
    const secondValue = secondRow.cells[thIndex].textContent;

    if (isNumber(firstValue)) {
      return validate(firstValue) - validate(secondValue);
    }

    return firstValue.localeCompare(secondValue);
  });

  tBody.append(...rows);
});

function isNumber(value) {
  if (/\d/.test(value)) {
    return true;
  }

  return false;
}

function validate(value) {
  return +value.replace(/\D/g, '');
}
