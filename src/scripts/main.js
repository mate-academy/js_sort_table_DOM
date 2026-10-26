'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

function parseCellValue(value) {
  const cleanValue = value.replace(/[$,]/g, '').trim();

  if (cleanValue !== '' && !Number.isNaN(Number(cleanValue))) {
    return Number(cleanValue);
  }

  return value.trim();
}

if (thead && tbody) {
  thead.addEventListener('click', (e) => {
    const header = e.target.closest('th');

    if (!header || !thead.contains(header)) {
      return;
    }

    const columnIndex = header.cellIndex;
    const rows = [...tbody.rows];

    rows.sort((rowA, rowB) => {
      const valA = parseCellValue(rowA.cells[columnIndex].textContent);
      const valB = parseCellValue(rowB.cells[columnIndex].textContent);

      if (typeof valA === 'number' && typeof valB === 'number') {
        return valA - valB;
      }

      return String(valA).localeCompare(String(valB));
    });

    tbody.append(...rows);
  });
}
