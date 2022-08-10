'use strict';

const table = document.querySelector('table');

const sortTable = function(index, type) {
  const tbody = table.querySelector('tbody');

  const compare = function(rowA, rowB) {
    const rowDataA = rowA.cells[index].innerHTML;
    const rowDataB = rowB.cells[index].innerHTML;

    switch (type) {
      case 'name':
        return rowDataA.localeCompare(rowDataB);
      case 'position':
        return rowDataA.localeCompare(rowDataB);
      case 'age':
        return rowDataA - rowDataB;
      case 'salary':
        return rowDataA.localeCompare(rowDataB);
      case 'default':
        break;
    }
  };

  const rows = [].slice.call(tbody.rows);

  rows.sort(compare);

  table.removeChild(tbody);

  for (let i = 0; i < rows.length; i++) {
    tbody.appendChild(rows[i]);
  }

  table.appendChild(tbody);
};

table.addEventListener('click', (e) => {
  const element = e.target;

  if (element.nodeName !== 'TH') {
    return;
  }

  const index = element.cellIndex;

  const type = element.getAttribute('data-type');

  sortTable(index, type);
});
