'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const rows = Array.from(table.querySelectorAll('tbody tr'));

headers.forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    const isAscending = header.classList.toggle('asc');
    const dataType =
      columnIndex === 2 || columnIndex === 3 ? 'number' : 'string';

    const sortedRows = rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[columnIndex].textContent.trim();
      const cellB = rowB.cells[columnIndex].textContent.trim();

      if (dataType === 'number') {
        const valueA = parseInt(cellA.replace(/\$/g, '').replace(/,/g, ''), 10);
        const valueB = parseInt(cellB.replace(/\$/g, '').replace(/,/g, ''), 10);

        return isAscending ? valueA - valueB : valueB - valueA;
      } else {
        return isAscending
          ? cellA.localeCompare(cellB)
          : cellB.localeCompare(cellA);
      }
    });

    const tbody = table.querySelector('tbody');

    tbody.innerHTML = '';

    sortedRows.forEach((row) => {
      tbody.appendChild(row);
    });
  });
});
