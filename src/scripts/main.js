'use strict';

const table = document.querySelector('table');
const tableHead = table.tHead;
const tableBody = table.tBodies[0];
let columnIndex;

function containsNumber(string) {
  return /\d/.test(string);
}

function getNumberFromString(string) {
  return Number(string.match(/\d/g).join(''));
}

const sortRowByValue = (previousRow, nextRow) => {
  const previousValue = previousRow.children[columnIndex].textContent;
  const nextValue = nextRow.children[columnIndex].textContent;

  return containsNumber(previousValue)
    ? getNumberFromString(previousValue) - getNumberFromString(nextValue)
    : previousValue.localeCompare(nextValue);
};

function sortColumn(element) {
  const selectedColumn = element.target;
  const bodyRows = [...tableBody.children];

  columnIndex = selectedColumn.cellIndex;

  bodyRows.sort(sortRowByValue);
  tableBody.append(...bodyRows);
}

tableHead.addEventListener('click', sortColumn);
