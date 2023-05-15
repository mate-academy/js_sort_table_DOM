'use strict';

const headTable = document.querySelector('thead');
const bodyTable = document.querySelector('tbody');
const rows = [...bodyTable.rows];

headTable.addEventListener('click', e => {
  if (!e.target.tagName === 'th') {
    return;
  };

  const targetIndex = e.target.cellIndex;

  function numberOptimizer(str) {
    return str.replace(/[$,]/g, '');
  };

  const sortList = rows.sort((a, b) => {
    const rowOne = numberOptimizer(a.cells[targetIndex].textContent);
    const rowTwo = numberOptimizer(b.cells[targetIndex].textContent);

    if (typeof rowOne === 'number') {
      return rowOne - rowTwo;
    };

    return rowOne.localeCompare(rowTwo);
  });

  bodyTable.append(...sortList);
});
