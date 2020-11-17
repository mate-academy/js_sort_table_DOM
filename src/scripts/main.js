'use strict';

const table = document.querySelector('table');
const tr = table.querySelectorAll('tr');
const sortedRows = [...tr].slice(1, [...tr].length - 1);

table.addEventListener('click', e => {
  if (e.target === table.rows[0].cells[0]) {
    sortedRows
      .sort((rowA, rowB) =>
        rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML)
      );
  };

  if (e.target === table.rows[0].cells[1]) {
    sortedRows
      .sort((rowA, rowB) =>
        rowA.cells[1].innerHTML.localeCompare(rowB.cells[1].innerHTML)
      );
  };

  if (e.target === table.rows[0].cells[2]) {
    sortedRows
      .sort((rowA, rowB) =>
        rowA.cells[2].innerHTML - rowB.cells[2].innerHTML
      );
  };

  if (e.target === table.rows[0].cells[3]) {
    sortedRows
      .sort((rowA, rowB) =>
        (rowA.cells[3].innerHTML.split(',').join('').split('$').join(''))
        - (rowB.cells[3].innerHTML.split(',').join('').split('$').join(''))
      );
  };

  table.tBodies[0].append(...sortedRows);
});
