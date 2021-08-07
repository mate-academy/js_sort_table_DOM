'use strict';

// write code here
const table = document.querySelector('table');
const tableBody = table.querySelector('tbody');
const headers = table.querySelectorAll('th');
const rows = tableBody.querySelectorAll('tr');

const sortColumn = (index) => {
  const newRows = Array.from(rows);

  newRows.sort((rowA, rowB) => {
    const cellA = rowA.querySelectorAll('td')[index].innerHTML;
    const cellB = rowB.querySelectorAll('td')[index].innerHTML;

    switch (true) {
      case cellA > cellB: return 1;
      case cellA < cellB: return -1;
      case cellA === cellB: return 0;
    }
  });

  // Remove old rows
  rows.forEach((row) => {
    tableBody.removeChild(row);
  });

  // Append new row
  newRows.forEach((newRow) => {
    tableBody.appendChild(newRow);
  });
};

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortColumn(index);
  });
});
