'use strict';

const headers = document.querySelectorAll('th');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const table = header.closest('table');
    const tbody = table.querySelector('tbody');
    const rows = tbody.querySelectorAll('tr');
    const index = header.cellIndex;
    const order = header.dataset.order;
    const sortedRows = Array.from(rows).sort((rowA, rowB) => {
      const cellA = rowA.querySelectorAll('td')[index].textContent;
      const cellB = rowB.querySelectorAll('td')[index].textContent;

      if (order === 'asc') {
        return cellA > cellB ? 1 : -1;
      } else {
        return cellA < cellB ? 1 : -1;
      }
    });

    tbody.innerHTML = '';
    sortedRows.forEach(row => tbody.appendChild(row));
    header.dataset.order = order === 'asc' ? 'desc' : 'asc';
  });
});
