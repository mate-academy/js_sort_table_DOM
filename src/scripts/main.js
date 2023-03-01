'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const index = [...headers].indexOf(header);

    const rows = [...tbody.querySelectorAll('tr')];

    const sortedRows = rows.sort((a, b) => {
      const aValue = a.querySelectorAll('td')[index].textContent;
      const bValue = b.querySelectorAll('td')[index].textContent;

      if (index === 2) {
        return parseInt(aValue) - parseInt(bValue);
      } else if (index === 3) {
        const aNum = parseFloat(aValue.replace('$', '').replace(',', ''));
        const bNum = parseFloat(bValue.replace('$', '').replace(',', ''));

        return aNum - bNum;
      } else {
        return aValue.localeCompare(bValue);
      }
    });

    tbody.innerHTML = '';

    sortedRows.forEach(row => {
      tbody.appendChild(row);
    });
  });
});
