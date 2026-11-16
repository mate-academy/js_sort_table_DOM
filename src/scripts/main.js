'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('thead th');
const tbody = table.querySelector('tbody');

headers.forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      const valueA = rowA.cells[columnIndex].textContent.trim();
      const valueB = rowB.cells[columnIndex].textContent.trim();

      const numberA = Number(valueA.replace(/[$,]/g, ''));
      const numberB = Number(valueB.replace(/[$,]/g, ''));

      const isNumericA = valueA !== '' && !Number.isNaN(numberA);
      const isNumericB = valueB !== '' && !Number.isNaN(numberB);

      if (isNumericA && isNumericB) {
        return numberA - numberB;
      }

      return valueA.localeCompare(valueB, undefined, {
        sensitivity: 'base',
      });
    });

    tbody.append(...rows);
  });
});
