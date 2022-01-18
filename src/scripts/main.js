'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = [ ...tbody.rows ];

thead.addEventListener('click', (eventObj) => {
  const target = eventObj.target;

  if (!target) {
    return;
  }

  const i = target.cellIndex;

  if (i <= 1) {
    rows.sort((row1, row2) =>
      row1.cells[i].innerText.localeCompare(row2.cells[i].innerText));
  }

  if (i === 2) {
    rows.sort((row1, row2) =>
      +row1.cells[i].innerText - +row2.cells[i].innerText);
  }

  if (i === 3) {
    rows.sort((row1, row2) => {
      const a = +row1.cells[i].innerText.slice(1).replace(',', '.');
      const b = +row2.cells[i].innerText.slice(1).replace(',', '.');

      return a - b;
    });
  }

  tbody.append(...rows);
});
