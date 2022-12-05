'use strict';

const head = document.querySelector('thead');
const table = document.querySelector('tbody');
let colomn;
let ascending = true;

head.addEventListener('click', (ev) => {
  const item = ev.target.closest('th');
  const itemIndex = item.cellIndex;

  if (colomn === itemIndex && ascending) {
    return reSortRows([...table.rows], itemIndex).forEach(tr => {
      table.append(tr);
    });
  }

  sortRows([...table.rows], itemIndex).forEach(tr => {
    table.append(tr);
  });
  colomn = itemIndex;
});

function num(str) {
  return +str.replace(/[,$]/g, '');
}

function sortRows(arr, index) {
  ascending = true;

  return arr.sort((a, b) => {
    if (isNaN(num(a.cells[index].innerText))) {
      return a.cells[index].innerText.localeCompare(b.cells[index].innerText);
    } else {
      return num(a.cells[index].innerText) - num(b.cells[index].innerText);
    }
  });
}

function reSortRows(arr, index) {
  ascending = false;

  return arr.sort((a, b) => {
    if (isNaN(num(a.cells[index].innerText))) {
      return b.cells[index].innerText.localeCompare(a.cells[index].innerText);
    } else {
      return num(b.cells[index].innerText) - num(a.cells[index].innerText);
    }
  });
}
