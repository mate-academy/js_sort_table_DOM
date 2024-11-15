'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const rows = Array.from(table.querySelectorAll('tbody tr'));

  const sortRows = (index) => {
    const isNumeric = index === 2 || index === 3;

    rows.sort((a, b) => {
      const cellA = a.cells[index].textContent.trim();
      const cellB = b.cells[index].textContent.trim();

      if (isNumeric) {
        return (
          parseFloat(cellA.replace(/[$,]/g, '')) -
          parseFloat(cellB.replace(/[$,]/g, ''))
        );
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    rows.forEach((row) => table.querySelector('tbody').appendChild(row));
  };

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      sortRows(index);
    });
  });
});
