'use strict';

const table = document.querySelector('table');
const tBody = document.querySelector('tbody');
const rows = [...tBody.rows];
let numberOfCell;

const convertToNumber = number =>
  +(number.split('').filter(num => !isNaN(num)).join(''));

const sortNumbers = (a, b) => {
  return convertToNumber(a.cells[numberOfCell].innerText)
    - convertToNumber(b.cells[numberOfCell].innerText);
};

const sortString = (a, b) => {
  const strA = a.cells[numberOfCell].innerText;
  const strB = b.cells[numberOfCell].innerText;

  return strA.localeCompare(strB);
};

table.addEventListener('click', (e) => {
  const sortButton = e.target.closest('thead');

  if (!sortButton) {
    return;
  }

  numberOfCell = e.target.cellIndex;

  rows.sort((a, b) => {
    switch (e.target.innerText) {
      case 'Salary':
      case 'Age':
        return sortNumbers(a, b);
      default:
        return sortString(a, b);
    }
  });

  for (const row of rows) {
    row.remove();
    tBody.append(row);
  }
});
