'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');
const allRows = document.querySelectorAll('tbody tr');

headers.forEach((th, i) => {
  th.removeAttribute('data-order');

  th.addEventListener('click', () => {
    sortByColumn(i, th);
  });
});

function sortByColumn(columnIndex) {

  const sortedRows = Array.from(allRows).sort((rowA, rowB) => {
    const cellA = rowA.children[columnIndex];
    const cellB = rowB.children[columnIndex];

    const textA = cellA.textContent.trim();
    const textB = cellB.textContent.trim();

    const valA =
      columnIndex === 2 || columnIndex === 3
        ? parseFloat(textA.replace('$', '').replace(',', ''))
        : textA;

    const valB =
      columnIndex === 2 || columnIndex === 3
        ? parseFloat(textB.replace('$', '').replace(',', ''))
        : textB;

    let comparison = 0;

    if (valA < valB) {
      comparison = -1;
    } else if (valA > valB) {
      comparison = 1;
    }

    return comparison;
  });

  headers.forEach((h) => h.removeAttribute('data-order'));

  sortedRows.forEach((row) => {
    tbody.appendChild(row);
  });
}
