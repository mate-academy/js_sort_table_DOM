'use strict';

const table = document.querySelector('table');
const rows = Array.from(table.rows).slice(1, -1);

document.addEventListener('click', function(ev) {
  const indexCell = ev.target.cellIndex;
  const sortedRows = rows.sort((a, b) => {
    if (ev.target.textContent === 'Name'
      || ev.target.textContent === 'Position') {
      return a.cells[indexCell].textContent
        .localeCompare(b.cells[indexCell].textContent);
    }

    if (ev.target.textContent === 'Age') {
      return a.cells[indexCell].textContent - b.cells[indexCell].textContent;
    }

    if (ev.target.textContent === 'Salary') {
      return a.cells[indexCell].textContent.replace('$', '').replace(',', '')
      - b.cells[indexCell].textContent.replace('$', '').replace(',', '');
    }
  });

  table.tBodies[0].append(...sortedRows);
});
