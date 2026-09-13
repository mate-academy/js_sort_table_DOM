'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const headers = table.querySelectorAll('thead th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[index].textContent.trim();
      const cellB = rowB.cells[index].textContent.trim();

      const parseValue = (value) => {
        const cleanedValue = value.replace(/[$,\s]/g, '');

        if (!isNaN(cleanedValue) && cleanedValue !== '') {
          return parseFloat(cleanedValue);
        }

        return value;
      };

      const valA = parseValue(cellA);
      const valB = parseValue(cellB);

      if (typeof valA === 'number' && typeof valB === 'number') {
        return valA - valB;
      }

      return valA.toString().localeCompare(valB.toString());
    });

    rows.forEach((row) => tbody.appendChild(row));
  });
});
