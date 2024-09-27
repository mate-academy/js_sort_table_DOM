'use strict';

const table = document.querySelector('table');
const tableBodyElements
  = [...document.querySelector('tbody').querySelectorAll('tr')];
const tableBody = document.querySelector('tbody');

const sortRows = sortedArray => tableBody.append(...sortedArray);
const convertToNumber = el => (
  +el.cells[3].innerText.slice(1).split(',').join('')
);

table.addEventListener('click', e => {
  if (e.target.innerText === 'Name') {
    tableBodyElements
      .sort((rowA, rowB) => (
        rowA.cells[0].innerText.localeCompare(rowB.cells[0].innerText)
      ));
    sortRows(tableBodyElements);
  }

  if (e.target.innerText === 'Position') {
    tableBodyElements
      .sort((rowA, rowB) => (
        rowA.cells[1].innerText.localeCompare(rowB.cells[1].innerText)
      ));
    sortRows(tableBodyElements);;
  }

  if (e.target.innerText === 'Age') {
    tableBodyElements
      .sort((rowA, rowB) => rowA.cells[2].innerText - rowB.cells[2].innerText);
    sortRows(tableBodyElements);
  }

  if (e.target.innerText === 'Salary') {
    tableBodyElements
      .sort((rowA, rowB) => convertToNumber(rowA) - convertToNumber(rowB));
    sortRows(tableBodyElements);
  }
});
