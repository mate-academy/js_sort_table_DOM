'use strict';

const table = document.querySelector('table');
const tBody = document.createElement('tbody');

table.tHead.addEventListener('click', (e) => {
  sortEmployees(e.target.textContent);
});

function getIdx(title) {
  const idx = 0;

  switch (title) {
    case 'Position':
      return 1;
    case 'Age':
      return 2;
    case 'Salary':
      return 3;
    default:
      return idx;
  }
}

function sortEmployees(title) {
  let sortedRows = [];
  const i = getIdx(title);

  switch (title) {
    case 'Age':
    case 'Salary':
      sortedRows = [...table.tBodies[0].children].sort((a, b) => {
        if (
          +[...a.children][i].textContent.replace(/[^0-9.]/g, '') >
          +[...b.children][i].textContent.replace(/[^0-9.]/g, '')
        ) {
          return 1;
        }

        if (
          +[...a.children][i].textContent.replace(/[^0-9.]/g, '') <
          +[...b.children][i].textContent.replace(/[^0-9.]/g, '')
        ) {
          return -1;
        }

        return 0;
      });
      break;
    default:
      sortedRows = [...table.tBodies[0].children].sort((a, b) => {
        return [...a.children][i].textContent.localeCompare(
          [...b.children][i].textContent,
        );
      });
  }

  table.tBodies[0].remove();
  insertTbody(sortedRows);
}

function insertTbody(rows) {
  rows.map((row) => {
    tBody.append(row);
  });

  table.append(tBody);
}
