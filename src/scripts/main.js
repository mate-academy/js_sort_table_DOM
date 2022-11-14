'use strict';

const table = document.querySelector('table');

table.tHead.addEventListener('click', (ev) => {
  const item = ev.target;
  const cell = item.cellIndex;
  const row = [];

  for (let i = 1; i < table.rows.length - 1; i++) {
    const values = [];

    for (let j = 0; j < table.rows[0].cells.length; j++) {
      const value = table.rows[i].cells[j].innerText;

      values.push(value);
    }

    row.push(values);
  }

  row.sort((a, b) => {
    const ifIncludeNumber = convertToNumber(a[cell]);

    return ifIncludeNumber
      ? convertToNumber(a[cell]) - convertToNumber(b[cell])
      : a[cell].localeCompare(b[cell]);
  });

  for (let i = 1; i < table.rows.length - 1; i++) {
    const x = table.rows[i].cells;

    [...x].forEach((el, a) => {
      el.innerText = row[i - 1][a];
    });
  }
});

function convertToNumber(string) {
  let result = '';

  for (const char of string) {
    if (isFinite(char)) {
      result += char;
    }
  }

  return +result;
};
