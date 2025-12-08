'use strict';

function isNumber(value) {
  return /\d/.test(value);
}

function validate(value) {
  return +value.replace(/\D/g, '');
}

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const tHead = table.tHead;
  const tBody = table.tBodies[0];

  tHead.addEventListener('click', (e) => {
    const rows = [...tBody.rows];
    const th = e.target.closest('th');

    if (!th) {
      return;
    }

    const thIndex = th.cellIndex;

    rows.sort((firstRow, secondRow) => {
      const firstValue = firstRow.cells[thIndex].textContent;
      const secondValue = secondRow.cells[thIndex].textContent;

      if (isNumber(firstValue) && isNumber(secondValue)) {
        return validate(firstValue) - validate(secondValue);
      }

      return firstValue.localeCompare(secondValue);
    });

    tBody.append(...rows);
  });
});
