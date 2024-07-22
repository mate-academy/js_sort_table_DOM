'use strict';

const employees = [...document.querySelectorAll('tbody > tr')];
const header = document.querySelector('thead');
const body = document.querySelector('tbody');

header.addEventListener('click', (e) => {
  const columnName = e.target.closest('th').textContent.trim().toLowerCase();

  body.innerHTML = '';

  employees
    .sort((r1, r2) => compareRows.get(columnName)(r1, r2))
    .forEach((row) => body.appendChild(row));
});

const compareRows = new Map();

compareRows.set('name', (r1, r2) =>
  r1.cells[0].textContent.trim().localeCompare(r2.cells[0].textContent.trim()),
);

compareRows.set('position', (r1, r2) =>
  r1.cells[1].textContent.trim().localeCompare(r2.cells[1].textContent.trim()),
);

compareRows.set(
  'age',
  (r1, r2) => +r1.cells[2].textContent - +r2.cells[2].textContent,
);

compareRows.set(
  'salary',
  (r1, r2) =>
    +r1.cells[3].textContent.replace('$', '').replace(',', '') -
    +r2.cells[3].textContent.replace('$', '').replace(',', ''),
);
