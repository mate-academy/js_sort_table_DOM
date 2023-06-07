'use strict';

const table = document.querySelector('table');
const thead = document.querySelector('thead');
const theadThs = thead.querySelectorAll('th');

function convNumber(text) {
  return Number(text.replace(/[^0-9.-]+/g, ''));
}

thead.addEventListener('click', (e) => {
  const item = e.target;

  switch (item.cellIndex) {

  }

  if (item === theadThs[0]) {
    const sortedRows = Array.from(table.rows)
      .slice(1, -1)
      .sort((rowA, rowB) =>
        rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

    table.tBodies[0].append(...sortedRows);
  }

  if (item === theadThs[1]) {
    const sortedRows1 = Array.from(table.rows)
      .slice(1, -1)
      .sort((rowA, rowB) =>
        rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1);

    table.tBodies[0].append(...sortedRows1);
  }

  if (item === theadThs[2]) {
    const sortedRows2 = Array.from(table.rows)
      .slice(1, -1)
      .sort((rowA, rowB) =>
        Number(rowA.cells[2].innerHTML) - Number(rowB.cells[2].innerHTML));

    table.tBodies[0].append(...sortedRows2);
  }

  if (item === theadThs[3]) {
    const sortedRows3 = Array.from(table.rows)
      .slice(1, -1)
      .sort((rowA, rowB) =>
        convNumber(rowA.cells[3].innerHTML)
        - convNumber(rowB.cells[3].innerHTML));

    table.tBodies[0].append(...sortedRows3);
  }
});
