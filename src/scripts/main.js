'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

table.querySelector('thead').addEventListener('click', (e) => {
  const clickToTh = e.target.closest('th');

  if (!clickToTh) {
    return;
  }

  const columnIndex = clickToTh.cellIndex;
  const rows = Array.from(tbody.rows);

  rows.sort((rowA, rowB) => {
    const valA = rowA.cells[columnIndex].textContent.trim();
    const valB = rowB.cells[columnIndex].textContent.trim();

    const cleanA = valA.replace(/\D/g, '');
    const cleanB = valB.replace(/\D/g, '');

    if (cleanA !== '' && cleanB !== '') {
      return Number(cleanA) - Number(cleanB);
    }

    return valA.localeCompare(valB);
  });

  tbody.append(...rows);
});
