'use strict';

const table = document.querySelector('table');
const tableHeaders = table.querySelectorAll('th');
const tableBody = table.querySelector('tbody');
const tableRows = tableBody.querySelectorAll('tr');

[].forEach.call(tableHeaders, function(header, index) {
  header.addEventListener('click', function() {
    sortColumn(index);
  });
});

const sortColumn = function(index) {
  const newRows = Array.from(tableRows);

  newRows.sort(function(rowA, rowB) {
    let cellA = rowA.querySelectorAll('td')[index].innerHTML;
    let cellB = rowB.querySelectorAll('td')[index].innerHTML;

    if (cellA.includes('$') || !isNaN(cellB)) {
      cellA = +cellA.replace(/[$,]/g, '');
      cellB = +cellB.replace(/[$,]/g, '');

      return cellA - cellB;
    }

    return cellA.localeCompare(cellB);
  });

  [].forEach.call(tableRows, function(row) {
    tableBody.removeChild(row);
  });

  newRows.forEach(function(newRow) {
    tableBody.appendChild(newRow);
  });
};
