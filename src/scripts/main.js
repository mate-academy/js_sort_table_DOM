'use strict';

const table = document.querySelector('table');

function sortTable(tab, row) {
  const rowsArray = Array.from(tab.rows).slice(1, tab.rows.length - 1);

  const result = rowsArray.sort((a, b) => {
    const one = a.cells[row].innerText.replace(/\W/g, '');
    const two = b.cells[row].innerText.replace(/\W/g, '');

    if (!isNaN(one)) {
      return one - two;
    }

    return one.localeCompare(two);
  });

  table.tBodies[0].append(...result);
}

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return false;
  }

  sortTable(table, e.target.cellIndex);
});
