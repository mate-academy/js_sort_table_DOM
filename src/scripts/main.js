'use strict';

const tHead = document.querySelector('thead');
const tFoot = document.querySelector('tfoot');
const tBody = document.querySelector('tbody');
const tableRows = [...tBody.children];

function dollarIntoNumber(value) {
  return +value.replace('$', '').replace(',', '.');
};

function sortingTable(targetTitle) {
  const position = targetTitle.cellIndex;

  switch (targetTitle.innerText.toLowerCase()) {
    case 'name':
    case 'position':
      tableRows.sort((currentRow, nextRow) => {
        return currentRow.children[position].innerText
          .localeCompare(nextRow.children[position].innerText);
      });
      break;

    case 'age':
      tableRows.sort((currentRow, nextRow) => {
        return currentRow.children[position].innerText
          - nextRow.children[position].innerText;
      });
      break;

    case 'salary':
      tableRows.sort((currentRow, nextRow) => {
        return dollarIntoNumber(currentRow.children[position].innerText)
          - dollarIntoNumber(nextRow.children[position].innerText);
      });
      break;
  }

  return tableRows;
}

function choosingTitle(title) {
  const item = title.target;

  tBody.append(...sortingTable(item));
}

tHead.addEventListener('click', choosingTitle);

tFoot.addEventListener('click', choosingTitle);
