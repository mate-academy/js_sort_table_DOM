'use strict';

const headings = document.querySelector('thead');
const rows = [...document.querySelectorAll('tbody tr')];
const body = document.querySelector('tbody');

headings.addEventListener('click', (e) => {
  const heading = e.target.closest('th');
  const columnIndex = heading.cellIndex;

  rows.sort((rowA, rowB) => {
    if (rowA.children[columnIndex].textContent.includes('$')) {
      const a = +rowA.cells[columnIndex].textContent
        .replace('$', '').replace(',', '');
      const b = +rowB.cells[columnIndex].textContent
        .replace('$', '').replace(',', '');

      return a - b;
    } else {
      return rowA.cells[columnIndex].textContent
        .localeCompare(rowB.cells[columnIndex].textContent);
    }
  });

  body.append(...rows);
});
