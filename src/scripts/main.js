'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const titleTable = document.querySelector('table thead');

  if (!titleTable) {
    return;
  }

  const collectionTh = titleTable.querySelectorAll('tr th');

  collectionTh.forEach((th, thIndex) => {
    th.addEventListener('click', () => {
      const rows = Array.from(document.querySelectorAll('tbody tr'));

      const sortedRows = rows
        .map((row, index) => ({ row, index }))
        .sort((aObj, bObj) => {
          const a = aObj.row;
          const b = bObj.row;
          const cellA = a.cells[thIndex].textContent.trim();
          const cellB = b.cells[thIndex].textContent.trim();

          let cmp = 0;

          if (th.textContent.trim() === 'Salary') {
            const salaryA = parseFloat(cellA.replace(/[$,]/g, ''));
            const salaryB = parseFloat(cellB.replace(/[$,]/g, ''));

            cmp = salaryA - salaryB;
          } else {
            const cleanA = cellA.replace(/,/g, '');
            const cleanB = cellB.replace(/,/g, '');
            const numA = parseFloat(cleanA);
            const numB = parseFloat(cleanB);

            if (!isNaN(numA) && !isNaN(numB)) {
              cmp = numA - numB;
            } else {
              cmp = cellA.localeCompare(cellB, 'uk', { sensitivity: 'base' });
            }
          }

          return cmp !== 0 ? cmp : aObj.index - bObj.index;
        })
        .map((obj) => obj.row);

      const tbody = document.querySelector('tbody');

      sortedRows.forEach((row) => tbody.appendChild(row));
    });
  });
});
