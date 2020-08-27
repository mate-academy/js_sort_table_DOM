'use strict';

const tbody = document.querySelector('tbody');

const thead = document.querySelector('thead');

thead.addEventListener('click', (event) => {
  const th = event.target;

  sortTableByColumn(th.cellIndex, th.innerText);
});

function sortTableByColumn(columnIndex, columnName) {
  const rows = [...tbody.rows];

  rows.sort((a, b) => {
    let rowA = a.cells[columnIndex].textContent;
    let rowB = b.cells[columnIndex].textContent;

    if (columnName === 'Salary') {
      rowA = +rowA.replace(/[$,]/g, '');
      rowB = +rowB.replace(/[$,]/g, '');
    }

    return columnName === 'Age' || columnName === 'Salary'
      ? Number(rowA) - Number(rowB)
      : rowA.localeCompare(rowB);
  });

  tbody.append(...rows);
}
