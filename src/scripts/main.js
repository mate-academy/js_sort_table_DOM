'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const sortDirection = [];

headers.forEach((header, index) => {
  sortDirection[index] = true;

  header.addEventListener('click', () => {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[index].textContent.trim().replace(/[$,]/g, '');

      const cellB = rowB.cells[index].textContent.trim().replace(/[$,]/g, '');

      const numA = parseFloat(cellA);
      const numB = parseFloat(cellB);

      if (!isNaN(numA) && !isNaN(numB)) {
        return sortDirection[index] ? numA - numB : numB - numA;
      } else {
        return sortDirection[index]
          ? cellA.localeCompare(cellB)
          : cellB.localeCompare(cellA);
      }
    });

    sortDirection[index] = !sortDirection[index];

    rows.forEach((row) => tbody.appendChild(row));
  });
});
