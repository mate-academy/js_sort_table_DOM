'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('thead th');

  headers.forEach(function(header, index) {
    header.addEventListener('click', function() {
      sortTable(index);
    });
  });

  function sortTable(columnIndex) {
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    const clickedHeader = headers[columnIndex];

    rows.sort(function(rowA, rowB) {
      let cellA = rowA.querySelectorAll('td')[columnIndex].textContent.trim();
      let cellB = rowB.querySelectorAll('td')[columnIndex].textContent.trim();

      if (clickedHeader.textContent.trim() === 'Salary') {
        cellA = parseFloat(cellA.replace(/\$/g, '').replace(/,/g, ''));
        cellB = parseFloat(cellB.replace(/\$/g, '').replace(/,/g, ''));
      }

      return columnIndex === 3 ? cellA - cellB : cellA.localeCompare(cellB);
    });

    rows.forEach(function(row) {
      table.querySelector('tbody').removeChild(row);
    });

    rows.forEach(function(row) {
      table.querySelector('tbody').appendChild(row);
    });
  }
});
