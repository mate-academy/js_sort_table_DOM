'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');

thead.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const columnIndex = th.cellIndex;
  const rowsArray = Array.from(tbody.rows);

  const cleanValue = (value) => value.replace(/[$,]/g, '');

  rowsArray.sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex].textContent;
    const cellB = rowB.cells[columnIndex].textContent;

    const valA = isNaN(cleanValue(cellA))
      ? cellA
      : parseFloat(cleanValue(cellA));

    const valB = isNaN(cleanValue(cellA))
      ? cellB
      : parseFloat(cleanValue(cellB));

    if (typeof valA === 'number' && typeof valB === 'number') {
      return valA - valB;
    }

    return valA.localeCompare(valB);
  });

  tbody.append(...rowsArray);
});
