'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('thead th');
  const tbody = document.querySelector('tbody');

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      const sortedRows = rows.sort((a, b) => {
        const aText = a.children[index].textContent.trim();
        const bText = b.children[index].textContent.trim();

        const aVal = parseValue(aText);
        const bVal = parseValue(bText);

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

  function parseValue(value) {
    if (value.includes('$')) {
      return parseFloat(value.replace(/[$,]/g, ''));
    } else if (!isNaN(value)) {
      return parseFloat(value);
    }

    return value.toLowerCase();
  }
});
