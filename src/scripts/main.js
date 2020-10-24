'use strict';

// write code here
const tHeader = document.querySelector('thead');
const tBody = document.querySelector('tbody');

tHeader.addEventListener('click', (event) => {
  const rows = [...tBody.rows];
  const caption = event.target;
  const columnIndex = caption.cellIndex;

  rows.sort((prev, curr) => {
    const prevText = prev.cells[columnIndex].textContent;
    const currText = curr.cells[columnIndex].textContent;

    if (isNaN(prevText)) {
      return prevText.localeCompare(currText);
    }

    return +prevText - +currText;
  });

  tBody.append(...rows);
});
