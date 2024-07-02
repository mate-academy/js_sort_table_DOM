'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const thead = table.querySelector('thead');
const rows = [...tbody.querySelectorAll('tr')];

thead.addEventListener('click', (e) => {
  const title = e.target.closest('th').textContent.toLowerCase();
  const cellIndex = e.target.cellIndex;
  const columns = [];

  tbody.querySelectorAll('tr').forEach((row) => {
    const column = row.cells[cellIndex];

    if (column) {
      columns.push(column.textContent);
    }
  });

  rows.sort((a, b) => {
    const colA = a.cells[cellIndex].textContent;
    const colB = b.cells[cellIndex].textContent;

    switch (title) {
      case 'name':
      case 'position':
        return String(colA).localeCompare(String(colB));
      case 'age':
        return +colA - +colB;
      case 'salary':
        return (
          +colA.replaceAll('$', '').replaceAll(',', '') -
          +colB.replaceAll('$', '').replaceAll(',', '')
        );
      default:
        return null;
    }
  });

  tbody.innerHTML = '';

  rows.forEach((row) => {
    tbody.appendChild(row);
  });
});
