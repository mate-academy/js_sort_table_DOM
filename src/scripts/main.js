/* eslint no-console: [,{ allow: ["warn", "log", "error"] }] */
'use strict';

const rows = document.querySelectorAll('table tbody tr');
const tableData = [];

rows.forEach((row) => {
  const nameContent = row.querySelector('td:first-child').textContent;
  const position = row.querySelector('td:nth-child(2)').textContent;
  const age = +row.querySelector('td:nth-child(3)').textContent;
  const salary = row.querySelector('td:nth-child(4)').textContent;

  tableData.push({
    name: nameContent,
    position,
    age,
    salary,
  });
});

const sortTable = (field) => {
  tableData.sort((a, b) => {
    let t1 = a[field];
    let t2 = b[field];

    if (field === 'salary') {
      t1 = +t1.replaceAll('$', '').replaceAll(',', '');
      t2 = +t2.replaceAll('$', '').replaceAll(',', '');
    }

    if (typeof t1 === 'number' && typeof t2 === 'number') {
      return t1 - t2;
    }

    return t1.localeCompare(t2);
  });
  rebuildTable(tableData);
};

const headRowCells = document.querySelectorAll('table thead tr th');

headRowCells.forEach((cell, index) => {
  const field = cell.textContent.toLowerCase();

  cell.addEventListener('click', () => sortTable(field));
});

const rebuildTable = (newData) => {
  const tbody = document.querySelector('tbody');

  tbody.innerHTML = '';

  newData.forEach((data) => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
    <td>${data.name}</td>
    <td>${data.position}</td>
    <td>${data.age}</td>
    <td>${data.salary}</td>
    `;
    tbody.append(tr);
  });
};
