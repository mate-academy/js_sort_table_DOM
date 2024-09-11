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
  let column = [];

  for (const row of table.rows) {
    column.push(row.cells[indexColumn].innerHTML);
  }

  column = column
    .slice(1, -1)
    .map((element) => {
      if (element.includes('$')) {
        return Number(element.slice(1).replace(',', ''));
      }

      return +element ? +element : element;
    })
    .sort((a, b) => {
      if (typeof a === 'number') {
        return a - b;
      }

      return a.localeCompare(b);
    })
    .map((element) => {
      if (indexColumn === 3) {
        return '$' + element.toLocaleString();
      }

      return element;
    });

  for (let i = 0; i < table.rows.length - 2; i++) {
    table.rows[i + 1].cells[indexColumn].innerHTML = column[i];
  }
});
