'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const sortDirections = Array.from(headers).fill(0);

  headers.forEach(function(header, columnIndex) {
    header.addEventListener('click', function() {
      const column = this.cellIndex;
      const rows = Array.from(table.querySelectorAll('tbody tr'));

      rows.sort(function(rowA, rowB) {
        const cellA = rowA.cells[column].textContent.trim()
          .replace(/[$,]/g, '');
        const cellB = rowB.cells[column].textContent.trim()
          .replace(/[$,]/g, '');

        return parseFloat(cellA) - parseFloat(cellB);
      });

      if (sortDirections[columnIndex] === 1) {
        rows.reverse();
        sortDirections[columnIndex] = -1;
      } else {
        sortDirections[columnIndex] = 1;
      }

      table.querySelector('tbody').innerHTML = '';
      table.querySelector('tbody').append(...rows);
    });
  });
});
