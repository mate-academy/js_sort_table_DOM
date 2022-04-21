'use strict';

const table = document.querySelector('table');
const tBody = document.querySelector('tbody');
const rows = [...tBody.rows];

const convertToNumber = number =>
  +(number.split('').filter(num => !isNaN(num)).join(''));

table.addEventListener('click', (e) => {
  const sortButton = e.target.closest('thead');

  if (!sortButton) {
    return;
  }

  const numberOfCell = e.target.cellIndex;

  rows.sort((a, b) => {
    if (e.target.innerText === 'Salary') {
      return convertToNumber(a.cells[numberOfCell].innerText)
        - convertToNumber(b.cells[numberOfCell].innerText);
    }

    const strA = a.cells[numberOfCell].innerText.toString();
    const strB = b.cells[numberOfCell].innerText.toString();

    return strA.localeCompare(strB);
  });

  for (const row of rows) {
    row.remove();
    tBody.append(row);
  }
});
