/* eslint-disable indent */
'use strict';

const headers = document.querySelectorAll('thead th');
const tbody = document.querySelector('tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', (e) => {
    const rows = Array.from(document.querySelectorAll('tbody tr'));

    const sortedRows = rows.map((row) => {
      const value =
        index === 3
          ? row.children[index].textContent
              .trim()
              .replaceAll(',', '')
              .replace('$', '')
          : row.children[index].textContent.trim();

      return {
        element: row,
        value,
      };
    });

    sortedRows.sort((a, b) => {
      if (!isNaN(Number(a.value)) && !isNaN(Number(b.value))) {
        return Number(a.value) - Number(b.value);
      } else {
        return a.value.localeCompare(b.value);
      }
    });

    tbody.innerHTML = '';
    sortedRows.forEach((obj) => tbody.appendChild(obj.element));
  });
});
