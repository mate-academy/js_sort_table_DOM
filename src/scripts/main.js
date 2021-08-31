'use strict';

const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');
const tableHead = table.querySelector('thead');
let rowList = tableBody.rows;

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

  if (headCol.innerText === 'Name') {
    rowList = [...rowList].sort((a, b) => {
      const aElem = a.cells[0].innerText;
      const bElem = b.cells[0].innerText;

      return aElem.localeCompare(bElem);
    });
  }

  if (headCol.innerText === 'Position') {
    rowList = [...rowList].sort((a, b) => {
      return a.cells[1].innerText.localeCompare(b.cells[1].innerText);
    });
  }

  if (headCol.innerText === 'Age') {
    rowList = [...rowList].sort((a, b) => {
      return a.cells[2].innerText - b.cells[2].innerText;
    });
  }

  if (headCol.innerText === 'Salary') {
    rowList = [...rowList].sort((a, b) => {
      const aElem = getNumber(a.cells[3].innerText);
      const bElem = getNumber(b.cells[3].innerText);

      return aElem - bElem;
    });
  }

  for (const row of rowList) {
    tableBody.append(row);
  }
});
