'use strict';

const tbody = document.querySelector('tbody');
const headers = document.querySelectorAll('thead th');

headers.forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    const rows = [...tbody.querySelectorAll('tr')];

    rows.sort((rowA, rowB) => {
      const valueA = rowA
        .querySelectorAll('td')
        [columnIndex].textContent.trim();
      const valueB = rowB
        .querySelectorAll('td')
        [columnIndex].textContent.trim();

      if (columnIndex === 2 || columnIndex === 3) {
        const numberA = Number(valueA.replaceAll('$', '').replaceAll(',', ''));
        const numberB = Number(valueB.replaceAll('$', '').replaceAll(',', ''));

        return numberA - numberB;
      }

      return valueA.localeCompare(valueB);
    });

    tbody.append(...rows);
  });
});
