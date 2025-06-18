'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('thead th');
const tableBody = table.querySelector('tbody');

headers.forEach((header, idx) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tableBody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      const cellA = rowA.children[idx].textContent;
      const cellB = rowB.children[idx].textContent;

      const numA = parseFloat(cellA.replace(/[$,]/g, ''));
      const numB = parseFloat(cellB.replace(/[$,]/g, ''));

      const a = !isNaN(numA) ? numA : cellA;
      const b = !isNaN(numB) ? numB : cellB;

      if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
      }

      return a.localeCompare(b);
    });

    tableBody.innerHTML = '';
    rows.forEach((row) => tableBody.appendChild(row));
  });
});
