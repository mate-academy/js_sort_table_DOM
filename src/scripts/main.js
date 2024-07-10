'use strict';

const thead = document.querySelector('thead tr');
const headers = [...thead.querySelectorAll('th')];
const tbody = document.querySelector('tbody');
const rows = [...tbody.rows];
const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  const sortBy = headers.indexOf(e.target);

  rows.sort((row1, row2) => {
    const cell1 = row1.cells[sortBy].textContent;
    const cell2 = row2.cells[sortBy].textContent;

    return cell1.localeCompare(cell2, undefined, { numeric: true });
  });

  rows.forEach((row) => tbody.appendChild(row));
});
