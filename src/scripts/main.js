'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');

const bodyRows = [...tBody.rows];

tHead.addEventListener('click', e => {
  sortRows(bodyRows, e.target.innerText);
});

function convertToNumber(str) {
  const number = parseInt(str.slice(1).split(',').join(''));

  return number;
}

function sortRows(arr, columnName) {
  let sortedRows = [];

  switch (columnName) {
    case 'Name':
      sortedRows = arr.sort((a, b) =>
        a.cells[0].innerText.localeCompare(b.cells[0].innerText)
      );
      break;
    case 'Position':
      sortedRows = arr.sort((a, b) =>
        a.cells[1].innerText.localeCompare(b.cells[1].innerText)
      );
      break;
    case 'Age':
      sortedRows = arr.sort((a, b) =>
        parseInt(a.cells[2].innerText)
        - parseInt(b.cells[2].innerText)
      );
      break;
    case 'Salary':
      sortedRows = arr.sort((a, b) =>
        convertToNumber(a.cells[3].innerText)
        - convertToNumber(b.cells[3].innerText)
      );
      break;
  }

  tBody.append(...sortedRows);
}
