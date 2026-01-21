'use strict';

const table = document.querySelector('table');
const tHeaders = table.querySelectorAll('th');

tHeaders.forEach((th) => {
  th.addEventListener('click', () => {
    const indexColumn = Array.from(tHeaders).indexOf(th);
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((a, b) => {
      const aCell = a.querySelectorAll('td')[indexColumn].textContent;
      const bCell = b.querySelectorAll('td')[indexColumn].textContent;
      const aValue = Number(aCell);
      const bValue = Number(bCell);

      if (!isNaN(aValue) && !isNaN(bValue)) {
        return aValue - bValue;
      }

      return aCell.localeCompare(bCell);
    });
    rows.forEach((row) => tbody.append(row));
  });
});
