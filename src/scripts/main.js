'use strict';

const titlesTop = document.querySelector('thead');
const titlesBottom = document.querySelector('tfoot');
const table = document.querySelector('tbody');
const tableRows = [...table.children];

function dolarToNumber(value) {
  const a = value.replace('$', '').replace(',', '.');

  return +a;
};

function sortingTableByTitleIndex(targetTitle) {
  switch (targetTitle.innerText.toLowerCase()) {
    case 'name':
    case 'position': {
      const position = targetTitle.cellIndex;

      tableRows.sort((currentRow, nextRow) => {
        return currentRow.children[position].innerText
          .localeCompare(nextRow.children[position].innerText);
      });

      table.append(...tableRows);
    }

      break;

    case 'age': {
      const position = targetTitle.cellIndex;

      tableRows.sort((currentRow, nextRow) => {
        return currentRow.children[position].innerText
          - nextRow.children[position].innerText;
      });

      table.append(...tableRows);
    }
      break;

    case 'salary': {
      const position = targetTitle.cellIndex;

      tableRows.sort((currentRow, nextRow) => {
        return dolarToNumber(currentRow.children[position].innerText)
          - dolarToNumber(nextRow.children[position].innerText);
      });
      table.append(...tableRows);
    }
      break;
  }
}

const chosingTitle = e => {
  const item = e.target;

  sortingTableByTitleIndex(item);
};

titlesTop.addEventListener('click', chosingTitle);

titlesBottom.addEventListener('click', chosingTitle);
