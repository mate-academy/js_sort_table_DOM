'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const rows = [...tBody.querySelectorAll('tr')];

const convertToNumber = (string) => +(string.replace(/[^0-9]/g, ''));

tHead.addEventListener('click', (clickEvent) => {
  const column = clickEvent.target.closest('th');
  const columnIndex = column.cellIndex;

  if (!column || !tHead.contains(column)) {
    return;
  }

  if (column.textContent === 'Name' || column.textContent === 'Position') {
    rows.sort((currentCell, nextCell) => {
      return currentCell.cells[columnIndex].innerText.localeCompare(
        nextCell.cells[columnIndex].innerText
      );
    });

    tBody.append(...rows);

    return;
  }

  rows.sort((currentCell, nextCell) => {
    return convertToNumber(currentCell.cells[columnIndex].innerText)
      - convertToNumber(nextCell.cells[columnIndex].innerText);
  });

  tBody.append(...rows);
}
);
