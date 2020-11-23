'use strict';

const table = document.querySelector('table');

const compareString = (a, b) => {
  let element = (a.innerText).replace(/\$/g, '');
  const operand1 = parseFloat(element.replace(/,/g, ''));

  element = (b.innerText).replace(/\$/g, '');

  const operand2 = parseFloat(element.replace(/,/g, ''));

  if (!isNaN(operand1) && !isNaN(operand2)) {
    if (operand1 > operand2) {
      return 1;
    } else {
      return -1;
    }
  } else {
    return (a.innerText.localeCompare(b.innerText));
  }
};

const sort = function(cellInx, callback, rowsCollection) {
  let count;

  do {
    count = 0;

    for (let indx = 2; indx < rowsCollection.length - 1; indx++) {
      const a = rowsCollection[indx - 1].cells[cellInx];
      const b = rowsCollection[indx].cells[cellInx];

      if (callback(a, b) > 0) {
        rowsCollection[indx].after(rowsCollection[indx - 1]);
        count++;
      }
    }
  } while (count > 0);
};

const handler = function(e) {
  const element = e.target;

  if (!element.matches('th')) {
    return;
  }

  const rows = table.rows;
  const cellIndex = element.cellIndex;

  sort(cellIndex, compareString, rows);
};

table.addEventListener('click', handler);
