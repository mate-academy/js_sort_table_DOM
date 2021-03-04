'use strict';

const thead = document.querySelector('thead');
const tfoot = document.querySelector('tfoot');
const tbody = document.querySelector('tbody');
const tableRows = [...tbody.children];

function dolarToNumber(value) {
  return +value.replace('$', '').replace(',', '.');
};

function sortingTableByTitleIndex(targetTitle) {
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
        return dolarToNumber(currentRow.children[position].innerText)
          - dolarToNumber(nextRow.children[position].innerText);
      });
      break;
  }

  return tableRows;
}

const chosingTitle = e => {
  const item = e.target;

  tbody.append(...sortingTableByTitleIndex(item));
};

thead.addEventListener('click', chosingTitle);

tfoot.addEventListener('click', chosingTitle);
