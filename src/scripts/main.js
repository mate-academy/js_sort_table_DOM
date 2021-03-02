'use strict';

const tableBody = document.querySelector('tbody');
const tableHead = document.querySelector('thead');

tableHead.addEventListener('click', e => {
  const column = e.target.closest('th');

  if (!column) {
    return;
  }

  const columnIndex = [...column.parentElement.children]
    .findIndex(child => child === column);
  const columnName = column.textContent;
  let sortedRows;

  switch (columnName) {
    case 'Name':
    case 'Position':
      sortedRows = [...tableBody.children].sort((currentRow, nextRow) => {
        return stringsCompare(
          currentRow.children[columnIndex].textContent,
          nextRow.children[columnIndex].textContent,
        );
      });
      break;
    case 'Age':
    case 'Salary':
      sortedRows = [...tableBody.children].sort((currentRow, nextRow) => {
        return numbersCompare(
          formatNumber(currentRow.children[columnIndex].textContent),
          formatNumber(nextRow.children[columnIndex].textContent),
        );
      });
      break;
  }

  tableBody.append(...sortedRows);
});

function formatNumber(number) {
  return +number.replace(/[^0-9.]/g, '');
}

function stringsCompare(first, second) {
  return first.localeCompare(second);
}

function numbersCompare(first, second) {
  return first - second;
}
