'use strict';

const table = document.querySelector('table');
const headers = Array.from(table.querySelectorAll('th'));
const rows = Array.from(table.querySelectorAll('tr')).slice(1, -1);

headers.forEach((header, columnIndex) => {
  header.addEventListener('click', () => {
    const sortedRows = [...rows].sort((rowA, rowB) => {
      const cellA = rowA.children[columnIndex].textContent.trim();
      const cellB = rowB.children[columnIndex].textContent.trim();

      if (cellA.startsWith('$') && cellB.startsWith('$')) {
        const salaryA = parseFloat(cellA.slice(1));
        const salaryB = parseFloat(cellB.slice(1));

        return salaryA - salaryB;
      }

      const numA = parseFloat(cellA);
      const numB = parseFloat(cellB);

      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      }

      return cellA.localeCompare(cellB);
    });

    const tbody = table.querySelector('tbody');

    tbody.innerHTML = '';
    sortedRows.forEach((row) => tbody.appendChild(row));
  });
});
