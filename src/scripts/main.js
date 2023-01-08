'use strict';

const table = document.querySelector('table');
const tableBody = table.querySelector('tbody');
const headers = table.querySelectorAll('th');
const rows = tableBody.querySelectorAll('tr');

[].forEach.call(headers, (header, index) => {
  header.addEventListener('click', () => {
    sortColumn(index);
  });
});

function convertToNumber(str) {
  return +str.slice(1).split(',').join('');
};

const sortColumn = (index) => {
  const newRows = Array.from(rows);

  newRows.sort((rowA, rowB) => {
    const cellA = rowA.querySelectorAll('td')[index].innerHTML;
    const cellB = rowB.querySelectorAll('td')[index].innerHTML;

    if (Number.isNaN(+cellA)) {
      if (cellA[0] === '$') {
        return convertToNumber(cellA) - convertToNumber(cellB);
      }

      return cellA.localeCompare(cellB);
    } else {
      return cellA - cellB;
    }
  });

  [].forEach.call(rows, (row) => {
    tableBody.removeChild(row);
  });

  newRows.forEach((newRow) => {
    tableBody.appendChild(newRow);
  });
};
