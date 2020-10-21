'use strict';

const tableHeader = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHeader.addEventListener('click', (event) => {
  const rows = [...tableBody.rows];
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

  tableBody.append(...rows);
});
