'use strict';

document.addEventListener('click', sortTable);

function sortTable(e) {
  const table = document.querySelector('table');
  const tbody = table.querySelector('tbody');
  const rows = Array.from(tbody.querySelectorAll('tr'));
  let index;

  if (e.target.textContent === 'Name') {
    index = 0;
  }

  if (e.target.textContent === 'Position') {
    index = 1;
  }

  if (e.target.textContent === 'Age') {
    index = 2;
  }

  if (e.target.textContent === 'Salary') {
    index = 3;
  }

  rows.sort((rowA, rowB) => {
    let cellA = rowA.cells[index].textContent.trim();
    let cellB = rowB.cells[index].textContent.trim();

    if (index === 3) {
       cellA = +rowA.cells[index].textContent.trim().split(',').join('').slice(1);
       cellB = +rowB.cells[index].textContent.trim().split(',').join('').slice(1);
    }

    return isNaN(cellA - cellB) ? cellA.localeCompare(cellB) : cellA - cellB;
  });

  rows.forEach((row) => tbody.appendChild(row));
}
