'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tableBody = table.querySelector('tbody');
  const rows = Array.from(tableBody.querySelectorAll('tr'));

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const isNumericColumn = index === 2 || index === 3;
      const sortedRows = rows.sort((rowA, rowB) => {
        const cellA = rowA.querySelectorAll('td')[index].innerHTML;
        const cellB = rowB.querySelectorAll('td')[index].innerHTML;

        if (isNumericColumn) {
          return (
            parseFloat(cellA.replace(/[^0-9.-]+/g, '')) -
            parseFloat(cellB.replace(/[^0-9.-]+/g, ''))
          );
        } else {
          return cellA.localeCompare(cellB);
        }
      });

      tableBody.innerHTML = '';

      tableBody.append(...sortedRows);
    });
  });
});
