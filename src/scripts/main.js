'use strict';

const table = document.querySelector('table');
const tbody = table.tBodies[0];
let sortedRows = [...tbody.rows];

function sortTableString(cellNumber) {
  sortedRows = [...tbody.rows].sort((prev, current) => {
    const prevString = prev.cells[cellNumber].innerText;
    const currentString = current.cells[cellNumber].innerText;

    return prevString.localeCompare(currentString);
  });

  tbody.append(...sortedRows);
}

function sortTableNumber(cellNumber) {
  sortedRows = [...tbody.rows].sort((prevStr, currentStr) => {
    const prevNum = toNumber(prevStr.cells[cellNumber].innerText);
    const currentNum = toNumber(currentStr.cells[cellNumber].innerText);

    return prevNum - currentNum;
  });

  tbody.append(...sortedRows);
}

table.tHead.addEventListener('click', (e) => {
  switch (true) {
    case (e.target.cellIndex === 0):
      sortTableString(0);

      return;

    case (e.target.cellIndex === 1):
      sortTableString(1);

      return;

    case (e.target.cellIndex === 2):
      sortTableNumber(2);

      return;

    case (e.target.cellIndex === 3):
      sortTableNumber(3);

      tbody.append(...sortedRows);
  }
});

function toNumber(string) {
  const numb = +string.replace(/\D/g, '');

  return numb;
}
