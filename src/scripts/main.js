'use strict';

// write code here
const table = document.querySelector('table');
const headers = table.querySelectorAll('thead th');
const tbody = table.querySelector('tbody');
let asc = true;

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(table.querySelectorAll('tbody tr'));

    const isNumeric = index === 2 || index === 3;

    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[index].textContent;
      const cellB = rowB.cells[index].textContent;

      if (isNumeric) {
        const numA = parseFloat(cellA.replace(/[$,]/g, ''));
        const numB = parseFloat(cellB.replace(/[$,]/g, ''));

        return asc ? numA - numB : numB - numA;
      } else {
        return asc ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
      }
    });

    asc = !asc;

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));
  });
});
