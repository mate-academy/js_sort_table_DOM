'use strict';

const title = document.querySelector('thead');
const table = document.querySelector('tbody');
let asc = true;
let active;

function sortTable(collectionRows, idx) {
  asc = true;

  return Array.from(collectionRows).sort((a, b) => {
    const v1 = a.cells[idx].innerText;
    const v2 = b.cells[idx].innerText;

    if (isNaN(num(v1))) {
      return v1.localeCompare(v2);
    } else {
      return num(v1) - num(v2);
    }
  });
}

function reSortTable(value, idx) {
  asc = false;

  return Array.from(value).sort((a, b) => {
    const v1 = a.cells[idx].innerText;
    const v2 = b.cells[idx].innerText;

    if (isNaN(num(v1))) {
      return v2.localeCompare(v1);
    } else {
      return num(v2) - num(v1);
    }
  });
}

function num(str) {
  return +str.replace(/[,$]/g, '');
}

title.addEventListener('click', (ev) => {
  const targ = ev.target;
  const idx = targ.cellIndex;

  if (active === idx && asc) {
    return reSortTable(table.rows, idx).forEach(row => {
      table.append(row);
    });
  }

  sortTable(table.rows, idx).forEach(row => {
    table.append(row);
  });
  active = idx;
});
