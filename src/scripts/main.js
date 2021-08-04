'use strict';

// write code here
const table = document.querySelector('table');
const tableRows = [...table.tBodies[0].rows];

const convertSalary = (str) => {
  return +str.slice(1).split(',').join('');
};

table.tHead.onclick = (ev) => {
  const target = ev.target;
  const index = target.cellIndex;

  switch (index) {
    case 0:
    case 1:
      tableRows.sort((row1, row2) => {
        return row1.cells[index].innerText > row2.cells[index].innerText
          ? 1 : -1;
      });
      break;

    case 2:
      tableRows.sort((row1, row2) => {
        return row1.cells[index].innerText - row2.cells[index].innerText;
      });
      break;

    case 3:
      tableRows.sort((row1, row2) => {
        return convertSalary(row1.cells[index].innerText)
        - convertSalary(row2.cells[index].innerText);
      });
      break;
  };
  table.tBodies[0].append(...tableRows);
};
