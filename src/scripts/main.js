'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');

  headers.forEach((header) => {
    header.addEventListener('click', () => {
      const columnIndex = Array.from(headers).indexOf(header);
      const rows = Array.from(table.querySelectorAll('tbody tr'));

      const sortedRows = rows.sort((a, b) => {
        const aText = a.children[columnIndex].textContent.trim();
        const bText = b.children[columnIndex].textContent.trim();

        if (!isNaN(aText) && !isNaN(bText)) {
          return Number(aText) - Number(bText);
        } else {
          return aText.localeCompare(bText);
        }
      });

      const tbody = table.querySelector('tbody');

      sortedRows.forEach((row) => tbody.appendChild(row));
    });
  });
});
