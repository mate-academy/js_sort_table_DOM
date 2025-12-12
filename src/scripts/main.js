'use strict';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');

function compareRowsByCol(colIndex, numeric = false) {
  return (rowA, rowB) => {
    const a = (rowA.cells[colIndex]?.textContent || '').trim();
    const b = (rowB.cells[colIndex]?.textContent || '').trim();

    if (numeric) {
      const na = parseFloat(a.replace(',', '.')) || 0;
      const nb = parseFloat(b.replace(',', '.')) || 0;

      return na - nb;
    }

    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: 'base',
    });
  };
}

table.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const th = e.target;
    const colIndex = th.cellIndex;
    const isNumeric = th.dataset.type === 'number';
    const rows = Array.from(tbody.rows);

    rows.sort(compareRowsByCol(colIndex, isNumeric));
    rows.forEach((r) => tbody.appendChild(r));
  }
});
