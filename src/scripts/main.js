'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const thead = [...table.querySelectorAll('thead')];
const rows = [...tbody.querySelectorAll('trows')];

thead.addEventListener('click', (e) => {
  const index = e.target.index;
  const title = e.target.closest('th').textContent.toLowerCase();
  const columns = [];

  tbody.querySelectorAll('tr').forEach((row) => {
    const column = row.cells[index];

    if (column) {
      columns.push(column.textContent);
    }
  });

  rows.sort((a, b) => {
    const colA = a.cells[index].textContent;
    const colB = b.cells[index].textContent;

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
