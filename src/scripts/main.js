'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('thead th');
const tbody = table.querySelector('tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rowsArray = Array.from(tbody.querySelectorAll('tr'));

    rowsArray.sort((rowA, rowB) => {
      const cellA = rowA.cells[index].textContent.trim();
      const cellB = rowB.cells[index].textContent.trim();

      const cleanA = cellA.replace(/[^0-9.-]+/g, '');
      const cleanB = cellB.replace(/[^0-9.-]+/g, '');

      if (cleanA !== '' && cleanB !== '' && !isNaN(cleanA) && !isNaN(cleanB)) {
        return Number(cleanA) - Number(cleanB);
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    tbody.innerHTML = '';

    rowsArray.forEach((row) => {
      tbody.appendChild(row);
    });
  });
});
