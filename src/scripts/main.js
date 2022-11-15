'use strict';

const table = document.querySelector('table');

table.tHead.addEventListener('click', (happening) => {
  const item = happening.target;
  const cell = item.cellIndex;
  const row = [];

  for (let i = 1; i < table.rows.length - 1; i++) {
    const arreyOfvaluesOfCell = [];

    for (let j = 0; j < table.rows[0].cells.length; j++) {
      const valueOfCell = table.rows[i].cells[j].innerText;

      arreyOfvaluesOfCell.push(valueOfCell);
    }

    row.push(arreyOfvaluesOfCell);
  }

  row.sort((a, b) => {
    const ifIncludeNumber = convertToNumber(a[cell]);

    return ifIncludeNumber
      ? convertToNumber(a[cell]) - convertToNumber(b[cell])
      : a[cell].localeCompare(b[cell]);
  });

  for (let i = 1; i < table.rows.length - 1; i++) {
    const itemCell = table.rows[i].cells;

    [...itemCell].forEach((el, indexOfEl) => {
      el.innerText = row[i - 1][indexOfEl];
    });
  }
});

function convertToNumber(string) {
  let filterResult = '';

  for (const char of string) {
    if (isFinite(char)) {
      filterResult += char;
    }
  }

  return Number(filterResult);
};
