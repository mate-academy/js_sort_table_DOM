/* eslint-disable no-shadow */
'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');

thead.addEventListener('click', (event) => {
  const header = event.target.closest('th');

  if (!header) {
    return;
  }

  const columnIndex = header.cellIndex;
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    const valueA = a.cells[columnIndex].textContent.trim();
    const valueB = b.cells[columnIndex].textContent.trim();

    if (columnIndex === 2 || columnIndex === 3) {
      const numberA = Number(valueA.replace(/[$,]/g, ''));
      const numberB = Number(valueB.replace(/[$,]/g, ''));

      return numberA - numberB;
    }

    return valueA.localeCompare(valueB);
  });

  rows.forEach((row) => {
    tbody.append(row);
  });
});
