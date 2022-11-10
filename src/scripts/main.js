'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

function sortData(colNumber, colName) {
  const rowsArr = Array.from(tableBody.rows);

  switch (colName) {
    case 'Age':
      rowsArr.sort((rowA, rowB) => {
        return rowA.cells[colNumber].innerHTML
              - rowB.cells[colNumber].innerHTML;
      });
      break;
    case 'Name':
      rowsArr.sort((rowA, rowB) => {
        return rowA.cells[colNumber].innerHTML
          .localeCompare(rowB.cells[colNumber].innerHTML);
      });
      break;
    case 'Position':
      rowsArr.sort((rowA, rowB) => {
        return rowA.cells[colNumber].innerHTML
          .localeCompare(rowB.cells[colNumber].innerHTML);
      });
      break;
    case 'Salary':
      rowsArr.sort((rowA, rowB) => {
        return convertSalaryToNumber(rowA.cells[colNumber].innerHTML)
                - convertSalaryToNumber(rowB.cells[colNumber].innerHTML);
      });
  };

  tableBody.append(...rowsArr);
};

function convertSalaryToNumber(salary) {
  return Number(salary.slice(1).split(',').join(''));
};

function onClick(e) {
  if (e.target.tagName !== 'TH') {
    return;
  };

  const th = e.target;

  sortData(th.cellIndex, th.innerHTML);
};

tableHead.addEventListener('click', onClick);
