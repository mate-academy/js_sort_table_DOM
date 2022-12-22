'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHead.addEventListener('click', action => {
  const item = action.target.innerHTML;
  const index = action.target.cellIndex;
  const rows = [...tableBody.children];

  switch (item) {
    case 'Name':
    case 'Position':
      rows.sort((a, b) =>
        a.cells[index].innerHTML.localeCompare(b.cells[index].innerHTML));
      break;
    case 'Age':
      rows.sort((a, b) =>
        b.cells[index].innerHTML - a.cells[index].innerHTML);
      break;
    case 'Salary':
      rows.sort((a, b) =>
        strToNo(b.cells[index].innerHTML)
          - strToNo(a.cells[index].innerHTML));
      break;
  }
  tableBody.append(...rows);
});

const strToNo = (str) => {
  return Number(str.slice(1).split(',').join(''));
};
