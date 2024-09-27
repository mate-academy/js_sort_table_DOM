'use strict';

// write code here
/* eslint-disable */
const tHead = document.querySelectorAll('table thead th');

for (let i = 0; i < tHead.length; i++) {
  tHead[i].addEventListener('click', () => {
    sortByColumnIndex(i);
  });
}

const tBody = document.querySelector('table tbody');
const rows = [...tBody.querySelectorAll('tr')];
console.log(rows);

function sortByColumnIndex(index) {
  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[index].textContent;
    const cellB = rowB.cells[index].textContent;
    return cellA.localeCompare(cellB, undefined, { numeric: true });
  });

  tBody.innerHTML = '';
  rows.forEach(row => tBody.append(row));
}
