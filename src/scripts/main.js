'use strict';

const table = document.querySelector('table');
const rows = table.querySelector('tbody');
const columnHeaders = table.querySelectorAll('thead th');

columnHeaders.forEach((header, i) => {
  header.addEventListener('click', () => {
    const rowsArray = Array.from(rows.querySelectorAll('tr'));
    const dataType = header.dataset.type;
    const isNumeric = dataType === 'number';

    const sortedArray = rowsArray.sort((a, b) => {
      const aValue = a.querySelectorAll('td')[i].textContent;
      const bValue = b.querySelectorAll('td')[i].textContent;

      if (isNumeric) {
        return Number(aValue) - Number(bValue);
      } else {
        return aValue.localeCompare(bValue);
      }
    });

    sortedArray.forEach(row => rows.appendChild(row));
  });
});
