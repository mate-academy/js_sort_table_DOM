'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

function formatData(data) {
  return parseFloat(data.replace(/[$,]/g, ''));
}

table.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const rows = [...tbody.rows];
  const columnIndex = th.cellIndex;

  const sortedRows = rows.sort((rowA, rowB) => {
    const a = rowA.children[columnIndex].textContent.trim();
    const b = rowB.children[columnIndex].textContent.trim();

    if (columnIndex === 2 || columnIndex === 3) {
      return formatData(a) - formatData(b);
    }

    return a.localeCompare(b);
  });

  tbody.innerHTML = '';
  sortedRows.forEach((row) => tbody.append(row));
});
