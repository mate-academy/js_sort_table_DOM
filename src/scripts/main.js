'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const headers = table.querySelectorAll('thead th');

const sortState = {};

headers.forEach((th, index) => {
  th.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const isAsc = (sortState[index] = !sortState[index]);

    rows.sort((rowA, rowB) => {
      let cellA = rowA.children[index].textContent.trim();
      let cellB = rowB.children[index].textContent.trim();

      if (index === 2) {
        cellA = Number(cellA);
        cellB = Number(cellB);
      }

      if (index === 3) {
        cellA = Number(cellA.replace(/[$, ]/g, ''));
        cellB = Number(cellB.replace(/[$, ]/g, ''));
      }

      if (typeof cellA === 'number') {
        return isAsc ? cellA - cellB : cellB - cellA;
      }

      return isAsc ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));
  });
});
