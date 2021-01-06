'use strict';

const table = document.querySelector('table');
const header = table.tHead.rows[0];
const headerCells = [...header.cells];
const rows = [...table.tBodies[0].children];

function convertToNumber(string) {
  return parseInt(string.replace(/[^0-9]/g, ''));
}

header.addEventListener('click', (e) => {
  const clikedIcon = headerCells.indexOf(e.target);

  rows.sort((a, b) => {
    const firstValue = a.cells[clikedIcon].innerText;
    const secondValue = b.cells[clikedIcon].innerText;
    const number1 = convertToNumber(firstValue);
    const number2 = convertToNumber(secondValue);

    if (isNaN(number1) || isNaN(number2)) {
      return firstValue.localeCompare(secondValue);
    }

    return number1 - number2;
  });

  table.tBodies[0].append(...rows);
});
