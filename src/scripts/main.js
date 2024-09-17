'use strict';

const table = document.querySelector('table');
const tableHead = table.querySelector('thead tr');
const tableInfo = table.querySelector('tbody');

table.addEventListener('click', event => {
  const targetIndex = [...tableHead.children].indexOf(event.target);

  switch (event.target.textContent) {
    case 'Name':
    case 'Position':
      sortingByLetters(tableInfo, targetIndex);
      break;
    case 'Age':
    case 'Salary':
      sortingByNumbers(tableInfo, targetIndex);
      break;
    default:
  }
});

function sortingByLetters(parent, index) {
  const stringSorted = [...parent.children]
    .sort((prev, curr) =>
      prev.children[index].textContent
        .localeCompare(curr.children[index].textContent));

  parent.append(...stringSorted);
}

function sortingByNumbers(parent, index) {
  const toNumber = string => Number(string.replace(/[$,]/g, ''));

  const numberSorted = [...parent.children]
    .sort((prev, curr) =>
      toNumber(prev.children[index].textContent)
      - toNumber(curr.children[index].textContent));

  parent.append(...numberSorted);
}
