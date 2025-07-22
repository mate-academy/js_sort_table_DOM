'use strict';

const table = document.querySelector('table');
const tableBody = table.tBodies;
const tableHead = table.tHead;
const titles = [...tableHead.rows[0].cells];
const rows = [...tableBody[0].children];

tableHead.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const indexCol = titles.findIndex((el) => el === e.target);

    rows.sort(sortRows(indexCol));

    for (const row of rows) {
      tableBody[0].append(row);
    }
    table.append(tableBody[0]);
  }
});

function sortRows(index) {
  return function (a, b) {
    const aEl = a.children[index].textContent;
    const bEl = b.children[index].textContent;

    if (index === 2 || index === 3) {
      return getNumber(aEl) - getNumber(bEl);
    } else {
      return aEl.localeCompare(bEl);
    }
  };
}

function getNumber(str) {
  return Number(str.replace(/[^\d.-]/g, ''));
}
