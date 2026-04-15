'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const index = th.cellIndex;
  const tbody = table.querySelector('tbody');
  const rows = [...tbody.querySelectorAll('tr')];

  rows.sort((rowA, rowB) => {
    const cellA = rowA.children[index];
    const cellB = rowB.children[index];
    const valA = cellA.textContent;
    const valB = cellB.textContent;
    const cleanA = valA.replace(/[^0-9]/g, '');
    const cleanB = valB.replace(/[^0-9]/g, '');
    const numA = Number(cleanA);
    const numB = Number(cleanB);

    if (cleanA !== '' && cleanB !== '') {
      return numA - numB;
    } else {
      return valA.trim().localeCompare(valB.trim());
    }
  });

  tbody.append(...rows);
});
