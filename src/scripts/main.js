'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const tableHeaders = document.querySelectorAll('th');
  const tableBody = document.querySelector('tbody');

  const tableRows = Array.from(tableBody.querySelectorAll('tr'));

  tableHeaders.forEach((header, columnIndex) => {
    header.addEventListener('click', () => {
      const sortedRows = tableRows
        .map((row) => {
          const cellText = row.cells[columnIndex].textContent.trim();
          const numericValue = parseFloat(cellText.replace(/[^0-9.-]+/g, ''));

          return { row, cellText, numericValue };
        })
        .sort((a, b) => {
          if (!isNaN(a.numericValue) && !isNaN(b.numericValue)) {
            return a.numericValue - b.numericValue;
          } else {
            return a.cellText.localeCompare(b.cellText);
          }
        })
        .map((item) => item.row);

      const fragment = document.createDocumentFragment();

      sortedRows.forEach((row) => fragment.appendChild(row));

      tableBody.innerHTML = '';
      tableBody.appendChild(fragment);
    });
  });
});
