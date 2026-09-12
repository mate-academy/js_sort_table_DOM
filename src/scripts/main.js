'use strict';

const head = document.querySelector('thead');
const headers = head.querySelectorAll('th');

const table = document.querySelector('tbody');
const rows = table.querySelectorAll('tr');

function makeColumn(list, count) {
  const column = [];

  list.forEach((row) => {
    const cells = row.cells;

    column.push(cells[count].textContent);
  });

  const sortedColumn = column.sort();

  for (let i = 0; i < list.length; i++) {
    rows[i].cells[count].textContent = sortedColumn[i];
  }

  return rows;
}

headers.forEach((header) => {
  header.addEventListener('click', () => {
    const counter = [...headers].indexOf(header);

    makeColumn(rows, counter);
  });
});
