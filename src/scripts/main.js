'use strict';

// write code here

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const tBody = table.tBodies[0];
  const columnIndex = th.cellIndex;

  const rows = Array.from(tBody.rows);

  rows.sort((rowA, rowB) => {
    const valA = rowA.cells[columnIndex].textContent.trim();
    const valB = rowB.cells[columnIndex].textContent.trim();

    const numA = parseFloat(valA.replace(/[^0-9.]/g, ''));
    const numB = parseFloat(valB.replace(/[^0-9.]/g, ''));

    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }

    return valA.localeCompare(valB);
  });

  tBody.innerHTML = '';

  rows.forEach((row) => tBody.appendChild(row));
});
