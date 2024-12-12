'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const keys = ['name', 'position', 'age', 'salary'];

const data = Array.from(tbody.rows).map((row) => {
  const cells = Array.from(row.cells);
  const object = {};

  cells.forEach((cell, index) => {
    object[keys[index]] = cell.textContent;
  });

  return object;
});

function getSorted() {
  tbody.innerHTML = '';

  data.forEach((row) => {
    const tr = document.createElement('tr');

    Object.values(row).forEach((cellContent) => {
      const td = document.createElement('td');

      td.textContent = cellContent;
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
}

table.addEventListener('click', (e) => {
  if (e.target === table.rows[0].cells[0]) {
    data.sort((a, b) => a.name.localeCompare(b.name));
    getSorted();
  }

  if (e.target === table.rows[0].cells[1]) {
    data.sort((a, b) => a.position.localeCompare(b.position));
    getSorted();
  }

  if (e.target === table.rows[0].cells[2]) {
    data.sort((a, b) => a.age - b.age);
    getSorted();
  }

  if (e.target === table.rows[0].cells[3]) {
    data.sort(
      (a, b) => +a.salary.replace(/[$,]/g, '') - +b.salary.replace(/[$,]/g, ''),
    );
    getSorted();
  }
});
