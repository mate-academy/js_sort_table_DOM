'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tableBody = table.querySelector('tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortColumn(index);
  });
});

const sortColumn = (index) => {
  const rows = Array.from(tableBody.querySelectorAll('tr'));

  rows.sort((rowA, rowB) => {
    const cellA = rowA.querySelectorAll('td')[index].innerHTML;
    const cellB = rowB.querySelectorAll('td')[index].innerHTML;

    const numA = parseInt(cellA.replace(/\D/g,''));
    const numB = parseInt(cellB.replace(/\D/g,''));

    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }

    if (cellA > cellB) return 1;
    if (cellA < cellB) return -1;
    return 0;
  });

  rows.forEach((newRow) => {
    tableBody.appendChild(newRow);
  });
};
