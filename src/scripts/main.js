'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addevListener('click', (ev) => {
  const rows = [...tbody.rows];
  const targ = ev.target;
  const columnIndex = targ.cellIndex;

  rows.sort((prev, curr) => {
    let prevText = prev.cells[columnIndex].textContent;
    let currText = curr.cells[columnIndex].textContent;

    if (prevText.startsWith('$')) {
      prevText = prevText.slice(1).split(',').join('');
      currText = currText.slice(1).split(',').join('');
    }

    if (isNaN(prevText)) {
      return prevText.localeCompare(currText);
    }

    return +prevText - +currText;
  });

  tbody.append(...rows);
});
