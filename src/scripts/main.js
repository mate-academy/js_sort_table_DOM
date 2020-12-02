'use strict';

const table = document.querySelector('table');
const tHead = table.querySelector('thead');
const tBody = table.querySelector('tbody');

tHead.addEventListener('click', (e) => {
  const headerBtn = e.target;

  sortTableByColumn(headerBtn.cellIndex);
});

function sortTableByColumn(columnNumber) {
  const rows = [...tBody.rows];

  const sortedRows = function(a, b) {
    const colA = a.cells[columnNumber].innerHTML;
    const colB = b.cells[columnNumber].innerHTML;

    const colWithNumA = parseInt((colA).replace(/\D+/g, ''));
    const colWithNumB = parseInt((colB).replace(/\D+/g, ''));

    if (isNaN(colWithNumA) || isNaN(colWithNumB)) {
      return colA > colB ? 1 : -1;
    } else {
      return colWithNumA - colWithNumB;
    }
  };

  rows.sort(sortedRows);
  tBody.append(...rows);
}
