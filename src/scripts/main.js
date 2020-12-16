'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  table.querySelector('thead').addEventListener('click', (e) => {
    const rowIndex = e.target.cellIndex;
    const rows = [...table.querySelector('tbody').rows];

    const sortColumnValues = (prev, next) => {
      const prevValue = prev.children[rowIndex].innerText;
      const nextValue = next.children[rowIndex].innerText;

      if (isNaN(prevValue.slice(-1))) {
        return prevValue.localeCompare(nextValue);
      }

      return Number(prevValue.replace(/[,|$]/g, ''))
      - Number(nextValue.replace(/[,|$]/g, ''));
    };

    rows.sort(sortColumnValues);
    table.querySelector('tbody').append(...rows);
  });
});
