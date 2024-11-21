'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (ev) => {
  const cellIndex = ev.target.cellIndex;
  const sortParam = ev.target.textContent;

  if (table.tHead.contains(ev.target)) {
    sortTable(cellIndex, sortParam);
  }
});

function sortTable(index, sortBy) {
  const tBody = table.tBodies[0];
  const rows = [...tBody.children];

  rows.sort((r1, r2) => {
    const value1 = r1.cells[index].textContent;
    const value2 = r2.cells[index].textContent;

    switch (sortBy) {
      case 'Name':
      case 'Position':
        return value1.localeCompare(value2);

      case 'Age':
      case 'Salary':
        return (
          parseFloat(value1.replace(/[^0-9]/g, '')) -
          parseFloat(value2.replace(/[^0-9]/g, ''))
        );

      default:
        return 0;
    }
  });

  rows.forEach((row) => tBody.append(row));
}
