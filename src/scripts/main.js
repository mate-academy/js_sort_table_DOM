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
  const rows = Array.from(tbody.rows);

  rows.sort((rowA, rowB) => {
    const a = rowA.cells[columnIndex].textContent.trim();
    const b = rowB.cells[columnIndex].textContent.trim();

    //  const numA = Number(a.replace(/[^0-9.]/g, ''));
    //  const numB = Number(b.replace(/[^0-9.]/g, ''));

    //  if (!isNaN(numA) && !isNaN(numB)) {
    //  return (numA - numB) * sortDirection;
    //  }

    return a.localeCompare(b, 'uk', { numeric: true });
  });

  tbody.append(...rows);
});
