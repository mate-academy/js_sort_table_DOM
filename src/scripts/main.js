'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHead.addEventListener('click', (e) => {
  const tableTitle = e.target.closest('th');

  if (!tableTitle) {
    return;
  }

  sortTable(tableTitle.cellIndex);
});

function sortTable(index) {
  const rows = Array.from(tableBody.rows);

  rows.sort((row1, row2) => {
    const cell1 = row1.cells[index].textContent;
    const cell2 = row2.cells[index].textContent;

    if (normalizeNumber(cell1) === '' || normalizeNumber(cell2) === '') {
      return cell1.localeCompare(cell2);
    }

    const number1 = Number(normalizeNumber(cell1));
    const number2 = Number(normalizeNumber(cell2));

    return number1 - number2;
  });

  tableBody.append(...rows);
}

function normalizeNumber(num) {
  return num.replace(/\D/g, '');
}
