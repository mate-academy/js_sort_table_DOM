'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');

thead.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const column = th.cellIndex;
  const rows = [...tbody.children];

  if (column === 3) {
    rows.sort((rowA, rowB) => {
      const a = +rowA.cells[column].textContent
        .replace('$', '').replace(',', '');
      const b = +rowB.cells[column].textContent
        .replace('$', '').replace(',', '');

      return a - b;
    });
  } else {
    rows.sort((rowA, rowB) =>
      rowA.cells[column].textContent
        .localeCompare(rowB.cells[column].textContent));
  }

  for (const row of rows) {
    tbody.appendChild(row);
  }
});
