'use strict';

const table = document.querySelector('table');

table.onclick = function (e) {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const th = e.target;

  sortTable(th.cellIndex, th.dataset.type);
};

function sortTable(colNum, type) {
  const tbody = table.querySelector('tbody');
  const rowsArray = Array.from(tbody.rows);
  let compare;

  switch (type) {
    case 'number':
      compare = function (rowA, rowB) {
        return Number(rowA.cells[colNum].textContent) - Number(rowB.cells[colNum].textContent);
      };
      break;
    case 'string':
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].textContent.localeCompare(
          rowB.cells[colNum].textContent,
        );
      };
      break;

    case 'salary':
      compare = function (rowA, rowB) {
        const a = parseSalary(rowA.cells[colNum].textContent);
        const b = parseSalary(rowB.cells[colNum].textContent);

        return a - b;
      };
  }

  function parseSalary(salaryStr) {
    return Number(salaryStr.replace(/[$,]/g, ''));
  }

  rowsArray.sort(compare);
  tbody.append(...rowsArray);
}
