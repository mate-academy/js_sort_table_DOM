'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHead.addEventListener('click', e => {
  const rows = [...tableBody.rows];
  const target = e.target;
  const index = target.cellIndex;

  rows.sort((prev, curr) => {
    let prevText = prev.cells[index].textContent;
    let currText = curr.cells[index].textContent;

    if (prevText[0] === '$') {
      prevText = prevText.slice(1).split(',').join('');
      currText = currText.slice(1).split(',').join('');
    }

    if (isNaN(prevText)) {
      return prevText.localeCompare(currText);
    }

    return prevText - currText;
  });

  tableBody.append(...rows);
});
