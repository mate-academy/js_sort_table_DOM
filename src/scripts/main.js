'use strict';

const table = document.querySelector('table');
const headers = document.querySelectorAll('th');

[].forEach.call(headers, function(header, index) {
  header.addEventListener('click', function() {
    sortColumn(index);
  });
});

const tableBody = table.querySelector('tbody');
const rows = tableBody.querySelectorAll('tr');

const sortColumn = function(index) {
  const newRows = Array.from(rows);

  newRows.sort(function(rowA, rowB) {
    let cellA = rowA.querySelectorAll('td')[index].innerHTML;
    let cellB = rowB.querySelectorAll('td')[index].innerHTML;

    if (cellA.includes('$')) {
      cellA = +cellA.replace(/[$,]/g, '');
      cellB = +cellB.replace(/[$,]/g, '');

      return cellA - cellB;
    }

    return cellA.localeCompare(cellB);
  });

  [].forEach.call(rows, function(row) {
    tableBody.removeChild(row);
  });

  newRows.forEach(function(newRow) {
    tableBody.appendChild(newRow);
  });
};
