'use strict';

const table = document.querySelector('table');
const tableHead = table.tHead;
const tableBody = table.tBodies[0];
let columnIndex;

function getNumberFromString(string) {
  return Number(string.match(/\d/g).join(''));
}

const sortRowsByValue = (previousRow, nextRow) => {
  const previousValue = previousRow.children[columnIndex].textContent;
  const nextValue = nextRow.children[columnIndex].textContent;

  return getNumberFromString(previousValue) - getNumberFromString(nextValue);
};

const sortRowsByString = (previousRow, nextRow) => {
  const previousString = previousRow.children[columnIndex].textContent;
  const nextString = nextRow.children[columnIndex].textContent;

  return previousString.localeCompare(nextString);
};

function sortColumn(element) {
  const selectedColumn = element.target;
  const bodyRows = [...tableBody.children];

  columnIndex = selectedColumn.cellIndex;

  switch (selectedColumn.textContent) {
    case 'Name':
    case 'Position':
      bodyRows.sort(sortRowsByString);
      break;

    case 'Age':
    case 'Salary':
      bodyRows.sort(sortRowsByValue);
      break;
  }

  tableBody.append(...bodyRows);
}

tableHead.addEventListener('click', sortColumn);
