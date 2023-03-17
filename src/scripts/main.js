'use strict';

const table = document.querySelector('table');

const sortTable = function(index, type) {
  const tbody = table.querySelector('tbody');

  const compare = function(rowA, rowB) {
    const rowADate = rowA.cells[index].innerHTML;
    const rowBDate = rowB.cells[index].innerHTML;

    switch (type) {
      case 'Name':
      case 'Position':
        if (rowADate < rowBDate) {
          return -1;
        } else if (rowADate > rowBDate) {
          return 1;
        }
        return 0;
      case 'Age':
        return rowADate - rowBDate;
      case 'Salary':
        const dateA = rowADate.split('$').join('').split(',').join('');
        const dateB = rowBDate.split('$').join('').split(',').join('');
        return dateA - dateB;
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
  const el = e.target;

  if (el.nodeName !== 'TH') {
    return;
  }

  const index = el.cellIndex;
  const type = el.innerText;

  sortTable(index, type);
});
