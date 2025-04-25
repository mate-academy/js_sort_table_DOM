'use strict';

const headers = document.querySelectorAll('thead tr th');

headers.forEach((header) => {
  header.addEventListener('click', () => {
    const table = document.querySelector('table');
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    const index = Array.from(header.parentNode.children).indexOf(header);
    const sortedRows = rows.sort((a, b) => {
      const aText = a.querySelectorAll('td')[index].textContent;
      const bText = b.querySelectorAll('td')[index].textContent;

      if (!isNaN(Number(aText)) && !isNaN(Number(bText))) {
        return parseFloat(aText) - parseFloat(bText);
      }

      return aText.localeCompare(bText);
    });
    const tbody = table.querySelector('tbody');

    tbody.innerHTML = '';
    sortedRows.forEach((row) => tbody.appendChild(row));
  });
});
