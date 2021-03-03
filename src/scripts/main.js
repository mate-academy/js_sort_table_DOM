'use strict';

const titlesTop = document.querySelector('thead');
const titlesBottom = document.querySelector('tfoot');
const table = document.querySelector('tbody');
const tableRows = [...table.children];

function dolarToNumber(value) {
  const a = value.replace('$', '').replace(',', '.');

  return +a;
};

function sortingTableByTitleIndex(i) {
  switch (i) {
    case 0:
    case 1: {
      const position = i;

      tableRows.sort((currentRow, nextRow) => {
        return currentRow.children[position].innerText
          .localeCompare(nextRow.children[position].innerText);
      });

      table.append(...tableRows);
    }

      break;

    case 2:
    case 3: {
      const position = i;

      if (i === 3) {
        tableRows.sort((currentRow, nextRow) => {
          return dolarToNumber(currentRow.children[position].innerText)
            - dolarToNumber(nextRow.children[position].innerText);
        });
      } else {
        tableRows.sort((currentRow, nextRow) => {
          return currentRow.children[position].innerText
            - nextRow.children[position].innerText;
        });
      }

      table.append(...tableRows);
    }
      break;
  }
}

const chosingTitle = e => {
  const item = e.target;
  const position = item.cellIndex;

  sortingTableByTitleIndex(position);
};

titlesTop.addEventListener('click', chosingTitle);

titlesBottom.addEventListener('click', chosingTitle);
