'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('table');
  const tableBody = table.querySelector('tbody');
  const headers = table.querySelectorAll('thead th');

  // Define sort order tracking object
  const sortOrders = {};

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tableBody.querySelectorAll('tr'));

      const isNumeric = !isNaN(
        rows[0].cells[index].textContent.replace(/\$|,/g, ''),
      );

      // Toggle sort order (default to ascending)
      sortOrders[index] = sortOrders[index] || 'asc';
      sortOrders[index] = sortOrders[index] === 'asc' ? 'desc' : 'asc';
      const multiplier = sortOrders[index] === 'asc' ? 1 : -1;

      rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[index].textContent.trim();
        const cellB = rowB.cells[index].textContent.trim();

        return isNumeric
          ? (parseFloat(cellA.replace(/\$|,/g, '')) -
              parseFloat(cellB.replace(/\$|,/g, ''))) *
              multiplier
          : cellA.localeCompare(cellB) * multiplier;
      });

      // Clear the table body and reattach sorted rows
      tableBody.innerHTML = '';
      rows.forEach((row) => tableBody.appendChild(row));
    });
  });
});
