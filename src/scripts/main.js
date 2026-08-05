'use strict';

document.addEventListener('click', (e) => {
  const tH = e.target.closest('th');

  if (!tH) {
    return;
  }

  const table = document.querySelector('table');
  const columnIndex = tH.cellIndex;

  const rows = [...table.rows].slice(1);

  rows.sort((rowA, rowB) => {
    let valueA = rowA.cells[columnIndex].textContent;
    let valueB = rowB.cells[columnIndex].textContent;

    if (columnIndex === 0 || columnIndex === 1) {
      return valueA.localeCompare(valueB);
    }

    if (columnIndex === 3) {
      valueA = Number(valueA.replaceAll('$', '').replaceAll(',', ''));
      valueB = Number(valueB.replaceAll('$', '').replaceAll(',', ''));

      return valueA - valueB;
    }

    return Number(valueA) - Number(valueB);
  });

  for (const row of rows) {
    table.appendChild(row);
  }
});
