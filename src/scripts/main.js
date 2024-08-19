'use strict';

const headers = document.querySelectorAll('th');
const rows = [...document.querySelectorAll('tbody tr')];
const body = document.querySelector('tbody');

function sort(index) {
  rows.sort((a, b) => {
    const cellA = a.cells[index].textContent;
    const cellB = b.cells[index].textContent;

    return cellA.localeCompare(cellB, undefined, { numeric: true });
  });

  body.innerHTML = '';

  rows.forEach((row) => body.append(row));
}

headers.forEach((head, index) => {
  head.addEventListener('click', () => {
    sort(index);
  });
});
