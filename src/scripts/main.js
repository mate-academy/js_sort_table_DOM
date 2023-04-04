'use strict';

const table = document.querySelector('table');

const tableRows = Array.from(table.rows).slice(1, table.rows.length - 1);

function sortTable(task, row) {
  const result = task.sort((a, b) => {
    if (row === 3) {
      return a.cells[row].innerText.slice(1).replace(',', '')
      - b.cells[row].innerText.slice(1).replace(',', '');
    }

    if (row === 0 || row === 1) {
      return a.cells[row].innerText.localeCompare(b.cells[row].innerText);
    }

    return a.cells[row].innerText - b.cells[row].innerText;
  });

  table.tBodies[0].append(...result);
}

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return false;
  }

  switch (true) {
    case e.target.innerText === 'Age':
      sortTable(tableRows, e.target.cellIndex);
      break;

    case e.target.innerText === 'Salary':
      sortTable(tableRows, e.target.cellIndex);
      break;

    case e.target.innerText === 'Position':
      sortTable(tableRows, e.target.cellIndex);
      break;

    case e.target.innerText === 'Name':
      sortTable(tableRows, e.target.cellIndex);
      break;

    default: return false;
  }
});
