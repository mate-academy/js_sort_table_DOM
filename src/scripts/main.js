'use strict';

const thead = document.querySelectorAll('thead th');

for (let i = 0; i < thead.length; i++) {
  thead[i].addEventListener('click', () => {
    sortByColumnIndex(i);
  });
}

const tbody = document.querySelector('table tbody');
const rows = [...tbody.rows];

function sortByColumnIndex(index) {
  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[index].textContent;
    const cellB = rowB.cells[index].textContent;

    return cellA.localeCompare(cellB, undefined, { numeric: true });
  });

  tbody.innerHTML = '';
  rows.forEach((row) => tbody.append(row));
}
