'use strict';

const table = document.querySelector('table');
const tr = table.querySelectorAll('tr');
const sortedRows = [...tr].slice(1, [...tr].length - 1);

table.addEventListener('click', e => {
  const asc = table.rows[0].cells;
  const index = [ ...asc ].indexOf(e.target);

  sortedRows
    .sort((a, b) =>
      a.cells[index].textContent.localeCompare(b.cells[index].textContent)
    );

  if (table.rows[1].cells[index].textContent.slice(0, 1) === '$') {
    sortedRows
      .sort((a, b) =>
        +(a.cells[index].textContent.split(',').join('').replace('$', ''))
        - +(b.cells[index].textContent.split(',').join('').replace('$', ''))
      );
  };

  table.tBodies[0].append(...sortedRows);
});
