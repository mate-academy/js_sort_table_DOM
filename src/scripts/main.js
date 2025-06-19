'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  headers.forEach((th, columnIndex) => {
    th.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      const isNumericColumn = (text) => {
        const clean = text.replace(/[$,]/g, '').trim();

        return !isNaN(clean) && clean !== '';
      };

      rows.sort((a, b) => {
        const aText = a.children[columnIndex].textContent.trim();
        const bText = b.children[columnIndex].textContent.trim();

        const aVal = isNumericColumn(aText)
          ? parseFloat(aText.replace(/[$,]/g, ''))
          : aText.toLowerCase();

        const bVal = isNumericColumn(bText)
          ? parseFloat(bText.replace(/[$,]/g, ''))
          : bText.toLowerCase();

        if (aVal < bVal) {
          return -1;
        }

        if (aVal > bVal) {
          return 1;
        }

        return 0;
      });

      rows.forEach((row) => tbody.appendChild(row));
    });
  });
});
