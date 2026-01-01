'use strict';

// write code here

const table = document.querySelector('table');
const headers = table.querySelectorAll('thead th');
const tbody = table.querySelector('tbody');

headers.forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const sortedRows = rows.sort((a, b) => {
      const aText = a.children[columnIndex].textContent.trim();
      const bText = b.children[columnIndex].textContent.trim();

      const aNumber = parseFloat(aText.replace(/[$,]/g, ''));
      const bNumber = parseFloat(bText.replace(/[$,]/g, ''));

      if (!isNaN(aNumber) && !isNaN(bNumber)) {
        return aNumber - bNumber;
      }

      return aText.localeCompare(bText);
    });

    tbody.innerHTML = '';
    sortedRows.forEach((row) => tbody.appendChild(row));
  });
});
