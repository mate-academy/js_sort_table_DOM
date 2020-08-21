'use strict';

// write code here
const table = document.querySelector('table');
const header = table.tHead.rows[0];
const headerItems = [...header.cells];
const rows = [...table.tBodies[0].children];

header.addEventListener('click', event => {
  const item = headerItems.indexOf(event.target);

  rows.sort((a, b) => {
    const firstValue = a.cells[item].innerText;
    const secondValue = b.cells[item].innerText;

    const firstNumber = parseInt(firstValue.split('$')
      .join('').split(',').join(''));
    const secondNumber = parseInt(secondValue.split('$')
      .join('').split(',').join(''));

    if (!firstNumber || !secondNumber) {
      return firstValue.localeCompare(secondValue);
    }

    return firstNumber - secondNumber;
  });

  table.tBodies[0].append(...rows);
});
