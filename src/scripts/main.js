'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

function sortData(PositionCell, PositionName) {
  const rowsArray = Array.from(tableBody.rows);

  switch (PositionName) {
    case 'Age':
      rowsArray.sort((rowA, rowB) => {
        return rowA.cells[PositionCell].innerHTML
         - rowB.cells[PositionCell].innerHTML;
      });
      break;

    case 'Name':
      rowsArray.sort((rowA, rowB) => {
        return rowA.cells[PositionCell].innerHTML.localeCompare(
          rowB.cells[PositionCell].innerHTML);
      });
      break;

    case 'Position':
      rowsArray.sort((rowA, rowB) => {
        return rowA.cells[PositionCell].innerHTML.localeCompare(
          rowB.cells[PositionCell].innerHTML);
      });
      break;

    case 'Salary':
      rowsArray.sort((rowA, rowB) => {
        return salaryToNumber(rowA.cells[PositionCell].innerHTML)
        - salaryToNumber(rowB.cells[PositionCell].innerHTML);
      });
      break;
  }

  tableBody.append(...rowsArray);

  function salaryToNumber(salary) {
    return Number(salary.slice(1).split(',').join(''));
  }
};

function onClick(e) {
  if (e.target.tagName !== 'TH') {
    return;
  };

  const th = e.target;

  sortData(th.cellIndex, th.innerHTML);
};
tableHead.addEventListener('click', onClick);
