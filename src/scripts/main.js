'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const headers = Array.from(document.querySelectorAll('table thead th'));

  headers.forEach(header => {
    header.addEventListener('click', function() {
      const tableBody = document.querySelector('table tbody');
      const tableRows = Array.from(tableBody.rows);

      const index = headers.indexOf(header);

      tableRows.sort((a, b) =>
        a.cells[index].innerText
          .localeCompare(b.cells[index].innerText));

      tableRows.forEach(row => tableBody.appendChild(row));
    });
  });
});
