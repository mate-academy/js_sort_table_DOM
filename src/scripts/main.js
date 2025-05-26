'use strict';

const headers = document.querySelectorAll('table thead th');
const tbody = document.querySelector('table tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const isCurrencyOrNumber = (text) => /^\$?\d/.test(text);

    const sortedRows = rows.sort((a, b) => {
      const aText = a.children[index].textContent.trim();
      const bText = b.children[index].textContent.trim();

      const aVal = isCurrencyOrNumber(aText)
        ? parseFloat(aText.replace(/[$,]/g, ''))
        : aText.toLowerCase();
      const bVal = isCurrencyOrNumber(bText)
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

    tbody.innerHTML = '';
    sortedRows.forEach((row) => tbody.appendChild(row));
  });
});
