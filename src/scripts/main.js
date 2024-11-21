'use strict';

// write code here

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');

  headers.forEach((header) => {
    header.addEventListener('click', function () {
      const column = this.textContent.trim().toLowerCase();

      sortTable(column);
    });
  });

  function sortTable(column) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      const cellA = rowA
        .querySelector(`td:nth-child(${getColumnIndex(column)})`)
        .textContent.trim();
      const cellB = rowB
        .querySelector(`td:nth-child(${getColumnIndex(column)})`)
        .textContent.trim();

      if (column === 'age' || column === 'salary') {
        return (
          parseFloat(cellA.replace(/[^0-9.-]+/g, '')) -
          parseFloat(cellB.replace(/[^0-9.-]+/g, ''))
        );
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }

    rows.forEach((row) => {
      tbody.appendChild(row);
    });
  }

  function getColumnIndex(column) {
    const secondHeaders = Array.from(table.querySelectorAll('th'));

    return (
      secondHeaders.findIndex(
        (header) => header.textContent.trim().toLowerCase() === column,
      ) + 1
    );
  }
});
