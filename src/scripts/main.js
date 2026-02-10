'use strict';

// write code here
const table = document.querySelector('table');
const tbody = document.querySelector('tbody');

table.addEventListener('click', (e) => {
  const col = e.target.closest('th');

  if (col === null) {
    return;
  }

  const rows = [...tbody.rows];

  const ind = col.cellIndex;

  const sortedRows = rows.sort((a, b) => {
    const astr = a.cells[ind].textContent.replace(/[^\d.-]/g, '');
    const bstr = b.cells[ind].textContent.replace(/[^\d.-]/g, '');

    if (astr.length > 0 && bstr.length > 0) {
      return +astr - +bstr;
    }

    if (astr.length === 0 || bstr.length === 0) {
      return a.cells[ind].textContent.localeCompare(b.cells[ind].textContent);
    }
  });

  tbody.append(...sortedRows);
});
