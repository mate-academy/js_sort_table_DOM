'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  const cellIndex = e.target.cellIndex;
  const sortParam = e.target.textContent;

  if (table.tHead.contains(e.target)) {
    sortTable(cellIndex, sortParam);
  }
});

function sortTable(index, sortBy) {
  const tBody = table.querySelector('tbody');
  const rows = [...tBody.children];

  rows.sort((rowA, rowB) => {
    const valueA = rowA.cells[index].textContent;
    const valueB = rowB.cells[index].textContent;

    switch (sortBy) {
      case 'Name':
      case 'Position':
        return valueA.localeCompare(valueB);

      case 'Age':
        return valueA - valueB;

      case 'Salary':
        return convertToN(valueA) - convertToN(valueB);

      default:
        return 0;
    }
  });

  rows.forEach((row) => tBody.append(row));
}

function convertToN(string) {
  return parseFloat(string.replace(/[^0-9]/g, ''));
}
