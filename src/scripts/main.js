'use strict';

const table = document.querySelector('table');

const sortTable = function(index, heading) {
  const tbody = document.querySelector('tbody');
  const compare = (rowA, rowB) => {
    let rowDataA = rowA.cells[index].innerHTML;
    let rowDataB = rowB.cells[index].innerHTML;

    switch (heading) {
      case 'Salary':
        rowDataA = +rowDataA.replace(/[$,]/g, '');
        rowDataB = +rowDataB.replace(/[$,]/g, '');

        return rowDataA - rowDataB;

      case 'Age':
        return rowDataA - rowDataB;

      case 'Name':
      case 'Position':
        if (rowDataA < rowDataB) {
          return -1;
        } else if (rowDataA > rowDataB) {
          return 1;
        }

        return 0;
    }
  };

  const rows = [].slice.call(tbody.rows);

  rows.sort(compare);
  table.removeChild(tbody);

  rows.forEach(row => {
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
};

table.addEventListener('click', e => {
  const element = e.target;

  if (element.nodeName !== 'TH') {
    return;
  }

  const heading = element.innerHTML;

  sortTable(element.cellIndex, heading);
});
