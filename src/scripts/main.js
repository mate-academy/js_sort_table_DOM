'use strict';

const table = document.querySelector('table');
const tableHeads = document.querySelectorAll('thead th');

tableHeads.forEach((head, index) => {
  head.addEventListener('click', (e) => {
    const sortValue = head.textContent;

    sortTable(sortValue, index);
  });
});

function sortTable(sortValue, columnIndex) {
  const rows = [...table.tBodies[0].children];

  rows.sort((a, b) => sortBy(a, b, sortValue, columnIndex));

  const sortedFragment = document.createDocumentFragment();

  rows.forEach((row) => sortedFragment.appendChild(row));
  table.tBodies[0].appendChild(sortedFragment);
}

function sortBy(a, b, sortValue, columnIndex) {
  const cellA = a.cells[columnIndex].innerText;
  const cellB = b.cells[columnIndex].innerText;

  switch (sortValue) {
    case 'Name':
    case 'Position':
      return cellA.localeCompare(cellB);
    case 'Age':
      return +cellA - +cellB;
    case 'Salary':
      return parseNumber(cellA) - parseNumber(cellB);
    default:
      return 0;
  }
}

function parseNumber(str) {
  const strNumbers = str.replace(/,/g, '').slice(1);
  const number = Number(strNumbers);

  return isNaN(number) ? 0 : number;
}
