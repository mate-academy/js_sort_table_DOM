'use strict';

const titleTable = document.querySelector('table thead');
const collectionTh = titleTable.querySelectorAll('tr th');

collectionTh.forEach((th, thIndex) => {
  th.addEventListener('click', () => {
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const sortedRows = rows.sort((a, b) => {
      const cellA = a.cells[thIndex].textContent.trim();
      const cellB = b.cells[thIndex].textContent.trim();

      if (th.textContent.trim() === 'Salary') {
        const salaryA = parseFloat(cellA.replace(/[$,]/g, ''));
        const salaryB = parseFloat(cellB.replace(/[$,]/g, ''));

        return salaryA - salaryB;
      }

      const numA = parseFloat(cellA.replace(',', '.'));
      const numB = parseFloat(cellB.replace(',', '.'));

      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      }

      return cellA.localeCompare(cellB, 'uk', { sensitivity: 'base' });
    });

    const tbody = document.querySelector('tbody');

    sortedRows.forEach((row) => tbody.appendChild(row));
  });
});
