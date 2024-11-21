'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const sortedRows = rows.sort((a, b) => {
      const aText = a
        .querySelectorAll('td')
        [index].textContent.trim()
        .replace(/[$,]/g, '');
      const bText = b
        .querySelectorAll('td')
        [index].textContent.trim()
        .replace(/[$,]/g, '');

      if (!isNaN(parseFloat(aText)) && !isNaN(parseFloat(bText))) {
        return parseFloat(aText) - parseFloat(bText);
        // parseFloat()- convert text values into num;
      } else {
        return aText.localeCompare(bText);
      }
    });

    sortedRows.forEach((row) => tbody.appendChild(row));
  });
});
