'use strict';

// write code here
const rows = [...document.body.querySelectorAll('tbody > tr')];
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

const nameColumn = 0;
const positionColumn = 1;
const ageColumn = 2;
const salaryColumn = 3;

function sortArrayAsString(array, columnNumber) {
  array.sort((currentRow, nextRow) => {
    return currentRow.children[columnNumber].innerText.localeCompare(
      nextRow.children[columnNumber].innerText
    );
  });
}

function sortArrayAsNumbers(array, columnNumber) {
  array.sort((currentRow, nextRow) => {
    let currentRowValue = currentRow.children[columnNumber].innerText;
    let nextRowValue = nextRow.children[columnNumber].innerText;

    if (currentRowValue.startsWith('$')) {
      currentRowValue = replaceSymbols(currentRowValue);
      nextRowValue = replaceSymbols(nextRowValue);
    }

    return Number(currentRowValue) - Number(nextRowValue);
  });
}

function replaceSymbols(string) {
  return string.replace(/[$,]+/g, '');
}

thead.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.innerText === 'Name') {
    sortArrayAsString(rows, nameColumn);
    tbody.append(...rows);
  }

  if (clickEvent.target.innerText === 'Position') {
    sortArrayAsString(rows, positionColumn);
    tbody.append(...rows);
  }

  if (clickEvent.target.innerText === 'Age') {
    sortArrayAsNumbers(rows, ageColumn);
    tbody.append(...rows);
  }

  if (clickEvent.target.innerText === 'Salary') {
    sortArrayAsNumbers(rows, salaryColumn);
    tbody.append(...rows);
  }
});
