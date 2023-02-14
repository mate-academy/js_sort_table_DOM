'use strict';

const tableHeaders = document.querySelectorAll('th');

tableHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    const tableBody = document.querySelector('tbody');
    const rows = Array.from(tableBody.querySelectorAll('tr'));

    const column = header.cellIndex;
    const sortDirection = header.dataset.sort === 'asc' ? -1 : 1;

    const sortedRows = rows.sort((a, b) => {
      const aCell = a.querySelectorAll('td')[column].textContent;
      const bCell = b.querySelectorAll('td')[column].textContent;

      return sortDirection * aCell.localeCompare(bCell, undefined,
        { numeric: true });
    });

    tableBody.innerHTML = '';

    sortedRows.forEach((row) => {
      tableBody.append(row);
    });
  });
});
