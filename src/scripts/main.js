'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const tableHeaders = document.querySelectorAll('table thead th');
  const tableBody = document.querySelector('table tbody');

  function sortByColumn(columnIndex) {
    const rows = Array.from(tableBody.rows);
    const getCellValue = (row) => row.cells[columnIndex].textContent.trim();
    const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value);

    rows.sort((a, b) => {
      const cellA = getCellValue(a);
      const cellB = getCellValue(b);

      if (isNumber(cellA) && isNumber(cellB)) {
        return parseFloat(cellA) - parseFloat(cellB);
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    rows.forEach((row) => tableBody.appendChild(row));
  }

  tableHeaders.forEach((header, index) => {
    header.addEventListener('click', () => sortByColumn(index));
  });
});
