'use strict';

const people = document.querySelector('tbody').children;
const header = document.querySelector('thead > tr');
let columnIndex = 0;

header.addEventListener('click', (e) => {
  const sorted = [...people].sort((a, b) => {
    columnIndex = e.target.cellIndex;

    if (isNaN(Number(a.cells[columnIndex].innerText))
    && !a.cells[columnIndex].innerText.startsWith('$')) {
      return (
        a.cells[columnIndex].innerText
          .localeCompare(b.cells[columnIndex].innerText)
      );
    }

    if (a.cells[columnIndex].innerText.startsWith('$')) {
      return +(a.cells[columnIndex].innerText)
        .replace(/\$/, '').replace(/,/, '') - +(b.cells[columnIndex].innerText)
        .replace(/\$/, '').replace(/,/, '');
    }

    if (!isNaN(Number(a.cells[columnIndex].innerText))) {
      return +a.cells[columnIndex].innerText - +b.cells[columnIndex].innerText;
    }
  });

  document.querySelector('tbody').append(...sorted);
});
