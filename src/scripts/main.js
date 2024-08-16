'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const sortedRows = rows.sort((a, b) => {
      const aText = a.querySelectorAll('td')[index].textContent.trim();
      const bText = b.querySelectorAll('td')[index].textContent.trim();
      const aValue = aText.replace(/[$,]/g, '');
      const bValue = bText.replace(/[$,]/g, '');

      if (!isNaN(parseFloat(aValue)) && !isNaN(parseFloat(bValue))) {
        return parseFloat(aValue) - parseFloat(bValue);
        // parseFloat()- convert text values into num;
      } else {
        return aValue.localeCompare(bValue);
      }
    });

    sortedRows.forEach((row) => tbody.appendChild(row));
  });
});
