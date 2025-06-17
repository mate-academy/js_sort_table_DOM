'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const headers = table.querySelectorAll('th');
  const tbody = table.querySelector('tbody');

  headers.forEach((th, index) => {
    th.addEventListener('click', () => {
      const rows = Array.from(tbody.querySelectorAll('tr'));

      const sortedRows = rows.sort((rowA, rowB) => {
        const cellA = rowA.children[index].textContent.trim();
        const cellB = rowB.children[index].textContent.trim();

        const isNumeric = index === 2 || index === 3;
        const valA = isNumeric
          ? parseFloat(cellA.replace(/[^0-9.]/g, ''))
          : cellA.toLowerCase();
        const valB = isNumeric
          ? parseFloat(cellB.replace(/[^0-9.]/g, ''))
          : cellB.toLowerCase();

        return valA > valB ? 1 : valA < valB ? -1 : 0;
      });

      tbody.innerHTML = '';
      sortedRows.forEach((row) => tbody.appendChild(row));
    });
  });
});
