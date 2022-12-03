'use strict';

document.querySelector('table').addEventListener('click', clickToSort);

function clickToSort(eventClick) {
  if (eventClick.target.tagName !== 'TH') {
    return;
  }

  const target = eventClick.target;

  sortTable(target.cellIndex, target.innerHTML);
}

function sortTable(index, text) {
  const tbody = document.querySelector('tbody');
  const rowTable = [...tbody.children];

  switch (text) {
    case 'Name':
    case 'Position':
      rowTable.sort((rowA, rowB) =>
        rowA.cells[index].innerHTML.localeCompare(rowB.cells[index].innerHTML));
      break;

    case 'Age':
      rowTable.sort((rowA, rowB) =>
        rowA.cells[index].innerHTML - rowB.cells[index].innerHTML);
      break;

    case 'Salary':
      rowTable.sort((rowA, rowB) =>
        toNormalNumber(rowA.cells[index].innerHTML)
          - toNormalNumber(rowB.cells[index].innerHTML));
      break;
  }

  tbody.append(...rowTable);
}

function toNormalNumber(string) {
  return +string.slice(1).split(',').join('');
}
