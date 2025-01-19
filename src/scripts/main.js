'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('thead th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.rows);

    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[index].textContent.trim();
      const cellB = rowB.cells[index].textContent.trim();

      if (index === 2 || index === 3) {
        const valueA = parseFloat(cellA.replace(/[\\$,]/g, ''));
        const valueB = parseFloat(cellB.replace(/[\\$,]/g, ''));

        return valueA - valueB;
      } else {
        return cellA.localeCompare(cellB);
      }
    });

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));
  });
});
