'use strict';

const headers = document.querySelectorAll('thead th');
const tbody = document.querySelector('tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = [...tbody.querySelectorAll('tr')];

    rows.sort((rowA, rowB) => {
      let valueA = rowA.cells[index].textContent.trim();
      let valueB = rowB.cells[index].textContent.trim();

      if (index === 2 || index === 3) {
        valueA = Number(valueA.replace(/[$,]/g, ''));
        valueB = Number(valueB.replace(/[$,]/g, ''));
      }

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB);
      }

      return valueA - valueB;
    });

    tbody.append(...rows);
  });
});
