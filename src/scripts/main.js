'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (ev) => {
  const target = ev.target.closest('thead th');

  if (!target) {
    return;
  }

  const columnIndex = target.cellIndex;
  const tablebody = table.querySelector('tbody');

  const rows = Array.from(tablebody.rows);
  const sortedRows = rows.sort((a, b) => {
    const aText = a.cells[columnIndex].textContent.trim();
    const bText = b.cells[columnIndex].textContent.trim();

    if (!isNaN(aText) && !isNaN(bText)) {
      return Number(aText) - Number(bText);
    }

    return aText.localeCompare(bText);
  });

  sortedRows.forEach((row) => tablebody.appendChild(row));
});
