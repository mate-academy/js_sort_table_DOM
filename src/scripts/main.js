'use strict';

// write code here
const table = document.querySelector('table');

table.addEventListener('click', function (e) {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const th = e.target;
  const columnIndex = Array.from(th.parentNode.children).indexOf(th);

  sortTable(columnIndex);
});

function sortTable(colNum) {
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.rows);

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[colNum].textContent.trim();
    const cellB = rowB.cells[colNum].textContent.trim();

    if (!isNaN(cellA) && !isNaN(cellB)) {
      return cellA - cellB;
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  tbody.append(...rows);
}
