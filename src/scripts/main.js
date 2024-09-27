'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const rows = [...tableBody.querySelectorAll('tr')];

const convertToNumber = (string) => {
  return Number(string.replace(/[^0-9]/g, ''));
};

tableHead.addEventListener('click', (clickEvent) => {
  const column = clickEvent.target.closest('th');
  const columnIndex = column.cellIndex;

  if (!column || !tableHead.contains(column)) {
    return;
  }

  if (column.textContent === 'Name' || column.textContent === 'Position') {
    rows.sort((currentCell, nextCell) => {
      return currentCell.cells[columnIndex].innerText.localeCompare(
        nextCell.cells[columnIndex].innerText
      );
    });

    tableBody.append(...rows);

    return;
  }

  rows.sort((currentCell, nextCell) => {
    return convertToNumber(currentCell.cells[columnIndex].innerText)
      - convertToNumber(nextCell.cells[columnIndex].innerText);
  });

  tableBody.append(...rows);
}
);
