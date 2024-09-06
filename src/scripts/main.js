'use strict';

// write code here
const table = document.querySelector('table');

table.onclick = function (e) {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const th = e.target;
  const filter = e.target.closest('th');
  const value = filter.textContent.toLowerCase().trim();

  sortTable(th.cellIndex, value);
};

function sortTable(colNum, type) {
  const tbody = document.querySelector('tbody');
  const rowsArrey = Array.from(tbody.rows);

  rowsArrey.sort((rowA, rowB) => {
    const cellA = rowA.cells[colNum].innerHTML;
    const cellB = rowB.cells[colNum].innerHTML;

    switch (type) {
      case 'name':
      case 'position':
        return cellA.localeCompare(cellB);

      case 'age':
        return cellA - cellB;

      case 'salary':
        return +cellA.replace(/[\D]+/g, '') - +cellB.replace(/[\D]+/g, '');

      default:
        return null;
    }
  });

  tbody.append(...rowsArrey);
}
