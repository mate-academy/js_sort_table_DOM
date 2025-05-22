'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tbody = table.querySelector('tbody');

headers.forEach((th, columnIndex) => {
  th.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    const sortedRows = rows.sort((rowA, rowB) => {
      const cellA = rowA.children[columnIndex].textContent.trim();
      const cellB = rowB.children[columnIndex].textContent.trim();

      if (cellA.startsWith('$') && cellB.startsWith('$')) {
        const salaryA = parseFloat(cellA.replace(/[$,]/g, ''));
        const salaryB = parseFloat(cellB.replace(/[$,]/g, ''));

        return salaryA - salaryB;
      }

      const numA = parseFloat(cellA);
      const numB = parseFloat(cellB);

      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      }

      return cellA.localeCompare(cellB);
    });

    tbody.innerHTML = '';
    sortedRows.forEach((row) => tbody.appendChild(row));
  });
});
