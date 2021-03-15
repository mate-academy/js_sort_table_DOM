'use strict';

const headings = document.querySelector('thead');
const rows = [...document.querySelectorAll('tbody tr')];
const body = document.querySelector('tbody');

function convertToNumber(value) {
  return +value.replace('$', '').replace(',', '');
}

function sortByLetters(index) {
  rows.sort((rowA, rowB) => {
    const firstCellContent = rowA.children[index].textContent;
    const secondCellContent = rowB.children[index].textContent;

    return firstCellContent.localeCompare(secondCellContent);
  });

  body.append(...rows);
}

function sortByNumbers(index) {
  rows.sort((rowA, rowB) => {
    const a = convertToNumber(rowA.children[index].textContent);
    const b = convertToNumber(rowB.children[index].textContent);

    return a - b;
  });

  body.append(...rows);
}

headings.addEventListener('click', (clickEvent) => {
  const heading = clickEvent.target.closest('th');
  const columnIndex = heading.cellIndex;

  switch (heading.textContent) {
    case 'Name':
    case 'Position':
      sortByLetters(columnIndex);
      break;
    case 'Age':
    case 'Salary':
      sortByNumbers(columnIndex);
  }
});
