'use strict';

const table = document.querySelector('table');
const tableRows = [...table.tBodies[0].rows];

table.tHead.addEventListener('click', ({ target }) => {
  const index = target.cellIndex;

  tableRows.sort((a, b) => {
    const columnA = a.children[index].textContent;
    const columnB = b.children[index].textContent;

    if (columnA.includes('$')) {
      return +(columnA.replace(/[\s.,$]/g, ''))
      - +(columnB.replace(/[\s.,$]/g, ''));
    }

    if (isNaN(+columnA)) {
      return columnA.localeCompare(columnB);
    }

    return +columnA - +columnB;
  });

  table.tBodies[0].append(...tableRows);
});
