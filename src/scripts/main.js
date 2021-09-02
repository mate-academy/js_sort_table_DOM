'use strict';

const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');
const tableHead = table.querySelector('thead');
const rowList = [...tableBody.rows];

function getNumber(string) {
  let str = '';

  for (let i = 0; i <= string.length; i++) {
    if (!isNaN(+string[i])) {
      str += string[i];
    }
  }

  return +str;
}

tableHead.addEventListener('click', e => {
  const headCol = e.target;

  if (!headCol) {
    return;
  }

  switch (headCol.innerText) {
    case 'Name':
      rowList.sort((a, b) => {
        const aElem = a.cells[0].innerText;
        const bElem = b.cells[0].innerText;

        return aElem.localeCompare(bElem);
      });
      break;

    case 'Position':
      rowList.sort((a, b) => {
        return a.cells[1].innerText.localeCompare(b.cells[1].innerText);
      });
      break;

    case 'Age':
      rowList.sort((a, b) => {
        return a.cells[2].innerText - b.cells[2].innerText;
      });
      break;

    case 'Salary':
      rowList.sort((a, b) => {
        const aElem = getNumber(a.cells[3].innerText);
        const bElem = getNumber(b.cells[3].innerText);

        return aElem - bElem;
      });
      break;
  }

  for (const row of rowList) {
    tableBody.append(row);
  }
});
