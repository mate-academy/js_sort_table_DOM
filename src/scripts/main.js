'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', e => {
  const th = e.target;

  sortByColumn(th.cellIndex, th.innerText);
});

function sortByColumn(colIndex, colName) {
  const rows = [...tbody.rows];

  rows.sort((a, b) => {
    let rowA = a.cells[colIndex].textContent;
    let rowB = b.cells[colIndex].textContent;

    if (colName === 'Salary') {
      rowA = +rowA.replace(/[$,]/g, '');
      rowB = +rowB.replace(/[$,]/g, '');
    }

    return colName === 'Age' || colName === 'Salary'
      ? +rowA - +rowB
      : rowA.localeCompare(rowB);
  });

  tbody.append(...rows);
}
