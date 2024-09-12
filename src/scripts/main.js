'use strict';

const table = document.querySelector('table');
let indexCol = -1;

const sortTable = function(index, type, isSorted) {
  const tbody = table.querySelector('tbody');

  const sort = function(rowA, rowB) {
    const rowResA = rowA.cells[index].innerHTML;
    const rowResB = rowB.cells[index].innerHTML;

    switch (type) {
      case 'Name':
      case 'Position':
        return rowResA < rowResB ? -1 : rowResA > rowResB ? 1 : 0;

      case 'Age':
        return rowResA - rowResB;

      case 'Salary':
        return parseFloat(rowResA.slice(1)) - parseFloat(rowResB.slice(1));
    }
  };

  const rows = [].slice.call(tbody.rows);

  rows.sort(sort);

  if (isSorted) {
    rows.reverse();
  }

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
  };

  const index = el.cellIndex;
  const type = el.innerHTML;

  sortTable(index, type, indexCol === index);
  indexCol = (indexCol === index) ? -1 : index;
});
