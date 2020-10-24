'use strict';

// write code here
const tHeader = document.querySelector('thead');
const tBody = document.querySelector('tbody');

tHeader.addEventListener('click', (event) => {
  const rows = [...tBody.rows];
  const caption = event.target;
  const columnIndex = caption.cellIndex;

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

  tBody.append(...rows);
});
