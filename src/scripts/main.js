'use strict';

const table = document.querySelector('table');

table.tHead.onclick = function (e) {
  const target = e.target;
  const index = target.cellIndex;
  const tbody = document.querySelector('tbody');
  let rows = [...table.querySelectorAll('tr:has(td)')];

  rows = sortedRows(rows, target.textContent, index);

  tbody.innerHTML = '';

  rows.forEach((row) => {
    tbody.append(row);
  });

  function sortedRows(arr, val, i) {
    switch (val) {
      case 'Age':
        return arr.sort(
          (a, b) => +a.cells[i].textContent - +b.cells[i].textContent,
        );
      case 'Salary':
        return arr.sort((a, b) => {
          const rowA = parseFloat(a.cells[i].textContent.trim().slice(1));
          const rowB = parseFloat(b.cells[i].textContent.trim().slice(1));

          return rowA - rowB;
        });
      default:
        return arr.sort((a, b) => {
          const rowA = a.cells[i].textContent.trim();
          const rowB = b.cells[i].textContent.trim();

          return rowA.localeCompare(rowB);
        });
    }
  }
};
