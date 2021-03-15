'use strict';

const body = document.querySelector('tbody');
const header = document.querySelector('thead');
const rows = [...body.querySelectorAll('tr')];

function toNumber(string) {
  return +string.replace(/[^\d]/g, '');
}

header.addEventListener('click', (action) => {
  const column = action.target.closest('th');
  const position = column.cellIndex;

  if (!column || !header.contains(column)) {
    return false;
  }

  switch (column.innerHTML) {
    case 'Name':
    case 'Position':
      rows.sort((currentRow, nextRow) => {
        return currentRow.children[position].innerHTML
          .localeCompare(nextRow.children[position].innerHTML);
      });
      break;

    case 'Age':
    case 'Salary':
      rows.sort((currentRow, nextRow) => {
        return toNumber(currentRow.children[position].innerHTML)
          - toNumber(nextRow.children[position].innerHTML);
      });
      break;
  }

  body.append(...rows);
});
