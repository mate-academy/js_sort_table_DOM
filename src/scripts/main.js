'use strict';

const thNodes = document.querySelectorAll('th');
const tab = document.querySelector('table');
const rows = tab.querySelectorAll('tr');
const rowsArr = Array.from(rows).slice(1, rows.length - 1);

thNodes.forEach(element => {
  if (element.closest('thead')) {
    element.addEventListener('click', e => {
      let dataType = 'number';
      const cell = e.target;
      const str = ((tab.rows[1].cells[cell.cellIndex]).innerHTML);
      const res = parseFloat(str);

      if (isNaN(res)) {
        dataType = 'string';
      }

      if (e.target.innerHTML === 'Salary') {
        dataType = 'money';
      }

      SortColumn(cell.cellIndex, dataType);
    });
  }
});

function SortColumn(columnNumber, dataType) {
  rowsArr.sort(function(rowA, rowB) {
    let cellA = rowA.cells[columnNumber].innerHTML;
    let cellB = rowB.cells[columnNumber].innerHTML;

    if (dataType === 'string') {
      return (cellA > cellB) ? 1 : (cellA < cellB) ? -1 : 0;
    } else {
      if (dataType === 'money') {
        cellA = formatSalary(cellA);
        cellB = formatSalary(cellB);
      }

      const firstNum = parseFloat(cellA);
      const secondNum = parseFloat(cellB);

      return (firstNum > secondNum) ? 1 : (firstNum < secondNum) ? -1 : 0;
    }
  });

  rowsArr.forEach(function(newRow) {
    tab.appendChild(newRow);
  });
};

function formatSalary(cell) {
  const num = cell.replace(/[$,]/g, '');

  return num;
}
