'use strict';

const headers = [...document.querySelectorAll('table thead th')];
const rows = document.querySelectorAll('table tbody tr');
const arrOfRows = [...rows];

headers.forEach((header) => {
  header.addEventListener('click', (e) => {
    const element = e.target;
    const index = headers.indexOf(element);

    sortRows(index);
  });
});

function sortRows(index) {
  const sortedRows = arrOfRows.sort((rowA, rowB) => {
    const cellA = rowA.cells[index].textContent.trim().replace(/[$,]/g, '');
    const cellB = rowB.cells[index].textContent.trim().replace(/[$,]/g, '');
    const isNumber = !isNaN(cellA) && !isNaN(cellB);

    if (isNumber) {
      return parseFloat(cellA) - parseFloat(cellB);
    }

    return cellA.localeCompare(cellB);
  });

  const tbody = document.querySelector('table tbody');

  tbody.innerHTML = '';
  sortedRows.forEach((row) => tbody.appendChild(row));
}
