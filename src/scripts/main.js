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

const sortColumn = (index) => {
  const newRows = Array.from(rows);

  newRows.sort((rowA, rowB) => {
    const cellA = rowA.querySelectorAll('td')[index].innerHTML;
    const cellB = rowB.querySelectorAll('td')[index].innerHTML;

    switch (true) {
      case cellA > cellB:
        return 1;
      case cellA < cellB:
        return -1;
      case cellA === cellB:
        return 0;
    }
  });

  [].forEach.call(rows, (row) => {
    tableBody.removeChild(row);
  });

  newRows.forEach((newRow) => {
    tableBody.appendChild(newRow);
  });
};
