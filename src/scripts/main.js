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

  const compare = function(rowA, rowB) {
    switch (type) {
      case 'string':
        return rowA.cells[colNum].innerHTML
          .localeCompare(rowB.cells[colNum].innerHTML);

      case 'number':
        return rowA.cells[colNum].innerHTML
        - rowB.cells[colNum].innerHTML;

      case 'salary':
        return valuesToNumber(rowA.cells[colNum].innerHTML)
        - valuesToNumber(rowB.cells[colNum].innerHTML);
    }

    function valuesToNumber(string) {
      return string.replace(',', '.').slice(1);
    }
  };

  rowsArray.sort(compare);
  tbody.append(...rowsArray);
}
