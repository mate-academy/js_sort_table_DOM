'use strict';

const thNodes = document.querySelectorAll('th');
const tab = document.querySelector('table');
const rows = tab.querySelectorAll('tr');
const rowsArr = Array.from(rows).slice(1, rows.length - 1);

thNodes.forEach(element => {
  if (element.closest('thead')) {
    element.addEventListener('click', e => {
      const cell = e.target;
      const str = ((tab.rows[1].cells[cell.cellIndex]).innerHTML);
      const strNew = str.replace(/[$]/g, '').replace(',', '.');
      const res = parseFloat(strNew);
      let number = true;

      if (isNaN(res)) {
        number = false;
      }

      SortColumn(cell.cellIndex, number);
    });
  }
});

function SortColumn(columnNumber, number) {
  rowsArr.sort(function(rowA, rowB) {
    const cellA = rowA.cells[columnNumber].innerHTML;
    const cellB = rowB.cells[columnNumber].innerHTML;

    if (number === false) {
      return (cellA > cellB) ? 1 : (cellA < cellB) ? -1 : 0;
    } else {
      const cellAOhneComma = cellA.replace(/[$]/g, '').replace(',', '.');
      const cellBOhneComma = cellB.replace(/[$]/g, '').replace(',', '.');
      const firstNum = parseFloat(cellAOhneComma);
      const secondNum = parseFloat(cellBOhneComma);

      return (firstNum > secondNum) ? 1 : (firstNum < secondNum) ? -1 : 0;
    }
  });

  rowsArr.forEach(function(newRow) {
    tab.appendChild(newRow);
  });
};
