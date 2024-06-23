'use strict';

const titlesList = document.querySelectorAll('table th');
const tbody = document.querySelector('tbody');
const rows = Array.from(tbody.querySelectorAll('tr'));

titlesList.forEach((title, index) => {
  title.addEventListener('click', (e) => {
    const titleText = e.target.textContent.trim();

    switch (titleText) {
      case 'Name':
        sortTable(index, 'text');
        break;
      case 'Position':
        sortTable(index, 'text');
        break;
      case 'Age':
        sortTable(index, 'number');
        break;
      case 'Salary':
        sortTable(index, 'number');
        break;
      default:
        break;
    }
    rows.forEach((row) => tbody.append(row));
  });
});

function sortTable(columnIndex, dataType) {
  rows.sort((rowA, rowB) => {
    const cellA = rowA.querySelectorAll('td')[columnIndex].textContent.trim();
    const cellB = rowB.querySelectorAll('td')[columnIndex].textContent.trim();

    if (dataType === 'number') {
      return helper(cellA) - helper(cellB);
    } else {
      return cellA.localeCompare(cellB);
    }
  });
}

function helper(string) {
  return Number(string.replace(/[^0-9.-]+/g, ''));
}
