'use strict';

const tableBody = document.querySelector('tbody');
const tableHead = document.querySelectorAll('thead tr th');
const table = document.querySelector('table');

table.addEventListener('click', e => {
  const item = e.target;

  if (![...tableHead].some(el => el === item)) {
    return;
  }

  const index = [...tableHead].findIndex(el => el === item);

  sortTable(index);
});

function sortTable(i) {
  [...tableBody.rows]
    .sort((a, b) => {
      const valueA = a.children[i].innerText;
      const valueB = b.children[i].innerText;

      return isNaN(toFormat(valueA))
        ? toFormat(valueA).localeCompare(toFormat(valueB))
        : toFormat(valueA) - toFormat(valueB);
    })
    .forEach(row => tableBody.append(row));
}

function toFormat(text) {
  const result = parseInt(text.replace(/[$,]/g, ''));

  return isNaN(result) ? text : result;
}
