'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const rows = [...tableBody.querySelectorAll('tr')];
const tableCells = document.querySelectorAll('td');

const convert = (string) => {
  return Number(string.replace(/[^0-9]/g, ''));
};

tableHead.addEventListener('click', (e) => {
  const column = e.target.closest('th');
  const columnIndex = column.cellIndex;

  if (!column || !tableHead.contains(column)) {
    return;
  }

  if (typeof tableCells[columnIndex].textContent === 'string') {
    rows.sort((currentCell, nextCell) => {
      return currentCell.cells[columnIndex].innerText.localeCompare(
        nextCell.cells[columnIndex].innerText
      );
    });
  }

  rows.sort((currentCell, nextCell) => {
    return convert(currentCell.cells[columnIndex].innerText) - convert(
      nextCell.cells[columnIndex].innerText
    );
  });

  rows.forEach(row => tableBody.append(row));
}
);
