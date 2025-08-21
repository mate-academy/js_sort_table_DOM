'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('thead th');
const tbody = table.querySelector('tbody');

function sortTable(index) {
  const rows = Array.from(tbody.children);

  const sortedRows = rows.sort((a, b) => {
    let firstRow = a.cells[index].textContent;
    let secondRow = b.cells[index].textContent;

    if (index === 2) {
      return parseInt(firstRow) - parseInt(secondRow);
    }

    if (index === 3) {
      firstRow = parseInt(firstRow.replace(/[$,]/g, ''));
      secondRow = parseInt(secondRow.replace(/[$,]/g, ''));

      return firstRow - secondRow;
    }

    return firstRow.localeCompare(secondRow);
  });

  tbody.innerHTML = '';

  sortedRows.forEach((row) => tbody.appendChild(row));
}

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortTable(index);
  });
});
