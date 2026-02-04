'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

table.querySelector('thead').addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const columnIndex = th.cellIndex;
  const type = th.textContent.trim();
  const rows = [...tbody.rows];
  const cleanValue = (val) => val.replace(/[$,]/g, '');

  rows.sort((rowA, rowB) => {
    const valA = rowA.cells[columnIndex].textContent.trim();
    const valB = rowB.cells[columnIndex].textContent.trim();

    if (type === 'Age' || type === 'Salary') {
      return Number(cleanValue(valA)) - Number(cleanValue(valB));
    }

    return valA.localeCompare(valB);
  });

  tbody.append(...rows);
});
