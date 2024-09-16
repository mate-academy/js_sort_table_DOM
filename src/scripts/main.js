'use strict';

// write code here
const rows = [...document.body.querySelectorAll('tbody > tr')];
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

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
  const targetColumn = clickEvent.target.closest('th').cellIndex;
  const columnHeader = clickEvent.target.innerText;

  switch (columnHeader) {
    case 'Name':
    case 'Position':
      sortArrayAsString(rows, targetColumn);
      break;
    case 'Age':
    case 'Salary':
      sortArrayAsNumbers(rows, targetColumn);
  }
  tbody.append(...rows);
});
