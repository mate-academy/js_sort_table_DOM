'use strict';

const headers = document.querySelector('thead tr');
const tBody = document.querySelector('tbody');

headers.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const headersArr = [...headers.children];
  const columnIndex = headersArr.indexOf(th);

  const rows = [...tBody.rows];

  rows.sort((rowA, rowB) => {
    const a = rowA.cells[columnIndex].textContent.trim();
    const b = rowB.cells[columnIndex].textContent.trim();

    if (columnIndex === 0 || columnIndex === 1) {
      return a.localeCompare(b);
    } else if (columnIndex === 2) {
      return +a - +b;
    } else {
      return +a.replace(/[$,]/g, '') - +b.replace(/[$,]/g, '');
    }
  });

  rows.forEach((row) => {
    tBody.appendChild(row);
  });
});
