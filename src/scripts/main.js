'use strict';

const table = document.querySelector('table');
const headers = [...table.querySelectorAll('th')];
const tbody = table.querySelector('tbody');

const rows = [...tbody.querySelectorAll('tr')];

const numberFormat = (n) => Number(n.replace(/[^0-9.-]+/g, ''));

headers.forEach((header, i) => {
  header.addEventListener('click', () => {
    rows.sort((a, b) => {
      const cellA = a.querySelectorAll('td')[i].textContent;
      const cellB = b.querySelectorAll('td')[i].textContent;

      if (Number(numberFormat(cellA))) {
        return numberFormat(cellA) - numberFormat(cellB);
      }

      return cellA.localeCompare(cellB);
    });

    rows.forEach((row) => tbody.appendChild(row));
  });
});
