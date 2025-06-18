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

      const a = parseFloat(cellA.replace(/[$,]/g, '')) || cellA;
      const b = parseFloat(cellB.replace(/[$,]/g, '')) || cellB;

      if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
      }

      return a.localeCompare(b);
    });

    tableBody.innerHTML = '';
    rows.forEach((row) => tableBody.appendChild(row));
  });
});
