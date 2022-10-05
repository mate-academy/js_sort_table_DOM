'use strict';

const table = document.querySelector('table');

table.addEventListener('click', function(ev) {
  const th = ev.target;

  if (th.tagName !== 'TH') {
    return;
  }
  sortList(th.cellIndex, th.dataset.type);
});

function sortList(colNum, type) {
  const tbody = table.querySelector('tbody');

  const rowsArray = Array.from(tbody.rows);

  function valuesToNumber(string) {
    return string.replace(',', '.').slice(1);
  }

  const compare = function(rowA, rowB) {
    if (type === 'string') {
      return rowA.cells[colNum].innerHTML
        .localeCompare(rowB.cells[colNum].innerHTML);
    } else if (type === 'salary') {
      return valuesToNumber(rowA.cells[colNum].innerHTML)
      - valuesToNumber(rowB.cells[colNum].innerHTML);
    } else {
      return rowA.cells[colNum].innerHTML
      - rowB.cells[colNum].innerHTML;
    }
  };

  rowsArray.sort(compare);
  tbody.append(...rowsArray);
}
