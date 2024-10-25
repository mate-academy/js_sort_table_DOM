'use strict';

const headers = document.querySelectorAll('th');
const body = document.querySelector('tbody');

function sortTab(index) {
  const rows = Array.from(body.querySelectorAll('tr'));

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[index].textContent.trim();
    const cellB = rowB.cells[index].textContent.trim();

    return cellA.localeCompare(cellB, undefined, { numeric: true });
  });

  body.innerHTML = '';
  rows.forEach((row) => body.appendChild(row));
}

headers.forEach((header, index) => {
  header.addEventListener('click', () => sortTab(index));
});
