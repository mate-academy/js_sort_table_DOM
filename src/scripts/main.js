'use strict';

const table = document.querySelector('table');
const tHead = document.querySelector('thead > tr');
const tBody = document.querySelector('tbody');

const getNumber = num => {
  return num.replace(/[\D]+/g, '');
};

const getColumnID = el => {
  for (let i = 0; i < tHead.cells.length; i++) {
    if (tHead.cells[i] === el) {
      return i;
    }
  }
};

const parseTable = columnID => {
  const data = [];

  for (const row of tBody.children) {
    data.push(row.cells[columnID].textContent);
  }

  return data;
};

const sortData = data => {
  const arrEl = getNumber(data[0]);

  if (arrEl !== '') {
    return data.sort((a, b) => getNumber(a) - getNumber(b));
  }

  return data.sort((a, b) => a.localeCompare(b));
};

const replaceColumn = (columnID, data) => {
  for (let i = 0; i < tBody.children.length; i++) {
    const row = tBody.children[i];

    row.cells[columnID].textContent = data[i];
  }
};

table.addEventListener('click', e => {
  if (tHead.contains(e.target)) {
    const columnID = getColumnID(e.target);
    const data = parseTable(columnID);

    sortData(data);
    replaceColumn(columnID, data);
  }
});
