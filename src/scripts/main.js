'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const rows = Array.from(table.querySelector('tbody').rows);

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const value = rows[0].cells[index].textContent
      .trim()
      .replace(/[^0-9.]/g, '');

    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[index].textContent.trim();
      const cellB = rowB.cells[index].textContent.trim();

      if (value) {
        return (
          parseFloat(cellA.replace(/[^0-9.]/g, '')) -
          parseFloat(cellB.replace(/[^0-9.]/g, ''))
        );
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    const tbody = table.querySelector('tbody');

    rows.forEach((row) => tbody.appendChild(row));
  });
});
