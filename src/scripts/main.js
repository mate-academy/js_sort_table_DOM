'use strict';

const ths = document.querySelectorAll('th');
const table = document.querySelector('table');
const tbody = document.querySelector('tbody');

let sort = false;

ths.forEach(th => th.addEventListener('click', event => {
  const cellsTable = [...table.rows[0].cells];
  let rowsAr = [];

  for (let i = 0; i < cellsTable.length; i++) {
    if (cellsTable[i] === event.currentTarget) {
      if (sort) {
        rowsAr = ([...tbody.rows].sort((rowA, rowB) => {
          if (event.currentTarget === cellsTable[3]) {
            return Number.parseFloat(rowA.cells[i].innerText.replace('$', ''))
             - Number.parseFloat(rowB.cells[i].innerText.replace('$', ''));
          } else {
            return rowA.cells[i].innerText
              .localeCompare(rowB.cells[i].innerText);
          }
        }));
      } else {
        rowsAr = ([...tbody.rows].sort((rowA, rowB) => {
          if (event.currentTarget === cellsTable[3]) {
            return Number.parseFloat(rowB.cells[i].innerText.replace('$', ''))
             - Number.parseFloat(rowA.cells[i].innerText.replace('$', ''));
          } else {
            return rowB.cells[i].innerText
              .localeCompare(rowA.cells[i].innerText);
          }
        }));
      }
      sort = !sort;
      tbody.append(...rowsAr);
    }
  }
}));
