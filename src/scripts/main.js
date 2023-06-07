'use strict';

const table = document.querySelector('table');
const thead = document.querySelector('thead');

function convNumber(text) {
  return Number(text.replace(/[^0-9.-]+/g, ''));
}

thead.addEventListener('click', (elem) => {
  const item = elem.target;
  const sortedRows = Array.from(table.rows)
    .slice(1, -1).sort((a, b) => {
      switch (item.cellIndex) {
        case 0:
        case 1:
          return a.cells[item.cellIndex].innerHTML
          > b.cells[item.cellIndex].innerHTML ? 1 : -1;
        case 2:
          return Number(a.cells[item.cellIndex].innerHTML)
          - Number(b.cells[item.cellIndex].innerHTML);
        case 3:
          return convNumber(a.cells[item.cellIndex].innerHTML)
          - convNumber(b.cells[item.cellIndex].innerHTML);
      }
    });

  table.tBodies[0].append(...sortedRows);
});
