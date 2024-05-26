'use strict';

const table = document.querySelector('table');
const thList = document.querySelectorAll('th');

thList.forEach((th) => {
  th.dataset.name = th.innerHTML.toLowerCase();
});

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const th = e.target;
  const thIndex = th.cellIndex;
  const thName = th.dataset.name;

  sortTable(thIndex, thName);
});

function getNumber(value) {
  return Number(value.slice(1).split(',').join(''));
}

function sortTable(colNum, type) {
  const tbody = document.querySelector('tbody');
  const rowsArray = Array.from(tbody.rows);

  switch (type) {
    case 'name':
    case 'position':
      rowsArray.sort((a, b) => {
        return a.cells[colNum].innerHTML.localeCompare(
          b.cells[colNum].innerHTML,
        );
      });
      break;

    case 'age':
      rowsArray.sort(
        (a, b) =>
          Number(a.cells[colNum].innerHTML) - Number(b.cells[colNum].innerHTML),
      );
      break;

    case 'salary':
      rowsArray.sort(
        (a, b) =>
          getNumber(a.cells[colNum].innerHTML) -
          getNumber(b.cells[colNum].innerHTML),
      );
      break;

    default:
      return;
  }

  tbody.append(...rowsArray);
}
