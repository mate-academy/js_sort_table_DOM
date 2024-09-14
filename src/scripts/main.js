'use strict';

const table = document.querySelector('table');
const thElements = document.querySelectorAll('th');
const thText = [...thElements].map((element) => element.firstChild);

document.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const indexColumn = thText.indexOf(th.firstChild);
  let rows = [];

  for (const row of table.rows) {
    rows.push([...row.cells].map((element) => element.innerHTML));
  }

  rows = rows
    .slice(1, -1)
    .map((row) => {
      return row.map((element) => {
        if (element.includes('$')) {
          return Number(element.slice(1).replace(',', ''));
        }

        return +element ? +element : element;
      });
    })
    .sort((a, b) => {
      if (typeof a[indexColumn] === 'number') {
        return a[indexColumn] - b[indexColumn];
      }

      return a[indexColumn].localeCompare(b[indexColumn]);
    })
    .map((row) => {
      return row.map((element) => {
        if (row.indexOf(element) === 3) {
          return '$' + element.toLocaleString();
        }

        return String(element);
      });
    });

  for (let i = 0; i < rows.length; i++) {
    for (let cell = 0; cell < table.rows[i + 1].cells.length; cell++) {
      table.rows[i + 1].cells[cell].innerHTML = rows[i][cell];
    }
  }
});
