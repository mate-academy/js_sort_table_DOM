'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  const th = e.target;

  if (th.tagName !== 'TH') {
    return;
  }

  const tbody = table.querySelector('tbody');
  const rows = [...tbody.rows];

  rows.sort((rowA, rowB) => {
    const valueA = rowA.cells[th.cellIndex].textContent;
    const valueB = rowB.cells[th.cellIndex].textContent;

    return valueA.localeCompare(valueB, undefined, {
      numeric: true,
    });
  });
  tbody.append(...rows);
});
