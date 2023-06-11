/* eslint-disable no-console */
'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const headers = Array.from(document.querySelectorAll('table thead th'));

  headers.forEach(header => {
    header.addEventListener('click', function() {
      const tableBody = document.querySelector('table tbody'); // select table
      const tableRows = Array.from(tableBody.rows); // array from rows

      // this is for logging rows and their cells
      tableRows.forEach((row) => {
        console.log('row cells =', row.cells[1]);
        console.log('row ===', row);
      });

      const index = headers.indexOf(header);

      console.log(index);

      tableRows.sort((a, b) =>
        a.cells[index].innerText // select according to indexof header
          .localeCompare(b.cells[index].innerText));
      // compares all rows of that index

      tableRows.forEach(row => tableBody.appendChild(row));
      // append each row to body after sorting
    });
  });
});
