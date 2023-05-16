'use strict';

const tableBody = document.querySelector('tbody');
const tableHeadArr = [...document.querySelectorAll('thead tr th')];
const tableHeader = document.querySelector('table').firstElementChild;

tableHeader.addEventListener('click', e => {
  const indexToSort = tableHeadArr.findIndex(el => el === e.target);

  sortTable(indexToSort);
});

function sortTable(index) {
  [...tableBody.rows]
    .sort((a, b) => {
      const valueA = a.cells[index].innerText;
      const valueB = b.cells[index].innerText;

      return (typeof toFormat(valueA) === 'string')
        ? toFormat(valueA).localeCompare(toFormat(valueB))
        : toFormat(valueA) - toFormat(valueB);
    })
    .forEach(row => tableBody.append(row));
}

function toFormat(text) {
  const result = parseFloat(text.replace(/[$,]/g, ''));

  return isNaN(result) ? text : result;
}
