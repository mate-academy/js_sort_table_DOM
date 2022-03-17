'use strict';

let clickedColumn;

const tableArray = [];

function toNumber(numberAsString) {
  let resultString = numberAsString;

  if (numberAsString[0] === '$') {
    resultString = numberAsString.slice(1);

    if (typeof (parseInt(resultString.split(',').join('')))
    === 'number') {
      resultString = parseInt(resultString.split(',').join(''));
    }
  } else if (parseInt(resultString)) {
    resultString = parseInt(numberAsString);
  }

  return resultString;
}

function sortByColumn(tableToSort, columnNumber) {
  const tableRows = tableToSort.querySelector('tbody').rows;
  const tableHeader = tableToSort.querySelector('thead');
  const tableFooter = tableToSort.querySelector('tfoot');

  for (let i = 0; i < tableRows.length; i++) {
    tableArray.push(tableRows[i]);
  }

  if (typeof (toNumber(tableArray[0].cells[columnNumber].innerHTML))
  === 'number') {
    tableArray.sort((a, b) => toNumber(a.cells[columnNumber].innerHTML)
    - toNumber(b.cells[columnNumber].innerHTML));
  } else {
    tableArray.sort(function(a, b) {
      const prev = a.cells[columnNumber].innerHTML;
      const next = b.cells[columnNumber].innerHTML;

      return prev.localeCompare(next);
    });
  }

  tableToSort.append(tableHeader);

  for (let i = 0; i < tableArray.length; i++) {
    tableToSort.append(tableArray[i]);
  }

  tableToSort.append(tableFooter);
}

document.addEventListener('click', e => {
  if (!e.target.closest('thead')) {
    return false;
  }

  const clickedHeaderCells = e.target.closest('tr').cells;

  for (let i = 0; i < clickedHeaderCells.length; i++) {
    if (clickedHeaderCells[i].innerHTML === e.target.innerHTML) {
      clickedColumn = i;
      break;
    }
  }

  const initialTable = document.querySelector('table');

  sortByColumn(initialTable, clickedColumn);
});
