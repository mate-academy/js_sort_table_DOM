'use strict';

// write code here
const table = document.querySelector('table');
const tableBody = table.tBodies[0];
const tableHead = table.tHead;
const tableBodyRows = [...tableBody.rows];

function sortRows(rows, index) {
  const sorted = rows.sort((x, y) => {
    const first = x.children[index].textContent.replace(/[^a-zA-Z0-9 ]/g, '');
    const second = y.children[index].textContent.replace(/[^a-zA-Z0-9 ]/g, '');

    if (isNaN(+first)) {
      return first.localeCompare(second);
    } else {
      return first - second;
    }
  });

  sorted.forEach(x => tableBody.append(x));
}

tableHead.addEventListener('click', (ev) => {
  const columnIndex = ev.target.cellIndex;

  sortRows(tableBodyRows, columnIndex);
});
