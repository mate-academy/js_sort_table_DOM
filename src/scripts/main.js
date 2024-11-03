'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tableBody = table.querySelector('tbody');
  const rows = Array.from(tableBody.querySelectorAll('tr'));

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const sortedRows = rows.sort((a, b) => {
        const cellA = a.querySelectorAll('td')[index].textContent.trim();
        const cellB = b.querySelectorAll('td')[index].textContent.trim();

        return cellA.localeCompare(cellB, undefined, { numeric: true });
      });

      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
      }

      tableBody.append(...sortedRows);
    });
  });
});
