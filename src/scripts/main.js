'use strict';

const headers = document.querySelectorAll('thead th');
const tbody = document.querySelector('tbody');

headers.forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      const valueA = rowA.cells[columnIndex].textContent.trim();
      const valueB = rowB.cells[columnIndex].textContent.trim();

      if (columnIndex === 2 || columnIndex === 3) {
        const numberA = Number(valueA.replace(/[$,]/g, ''));
        const numberB = Number(valueB.replace(/[$,]/g, ''));

        return numberA - numberB;
      }

      return valueA.localeCompare(valueB);
    });

    rows.forEach((row) => {
      tbody.appendChild(row);
    });
  });
});
