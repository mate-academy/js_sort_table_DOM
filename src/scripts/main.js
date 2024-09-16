'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHead.addEventListener('click', onClick);

function onClick(e) {
  const th = e.target;

  sortData(th.cellIndex, th.innerHTML);
};

function sortData(colIndex, colName) {
  const rowsArr = Array.from(tableBody.rows);

  switch (colName) {

    case 'Name':
    case 'Position':
      rowsArr.sort((rowOne, rowTwo) =>
        rowOne.cells[colIndex].innerHTML
          .localeCompare(rowTwo.cells[colIndex].innerHTML)
      );
      break;

    case 'Age':
    case 'Salary':
      rowsArr.sort((rowOne, rowTwo) =>
        convertSalaryToNumber(rowOne.cells[colIndex].innerHTML)
          - convertSalaryToNumber(rowTwo.cells[colIndex].innerHTML)
      );
  };

  tableBody.append(...rowsArr);
};

function convertSalaryToNumber(salary) {
  return Number(salary.slice(1).split(',').join(''));
};
