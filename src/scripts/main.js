'use strict';

const tableHeader = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHeader.addEventListener('click', e => {
  const index = e.target.cellIndex;

  const sorted = [...tableBody.rows].sort((a, b) => {
    const aText = a.cells[index].innerText;
    const bText = b.cells[index].innerText;

    switch (index) {
      case 0:
      case 1:
        return aText.localeCompare(bText);
      case 2:
        return +aText - +bText;
      case 3:
        return +aText.replace(/\W/g, '')
        - +bText.replace(/\W/g, '');
      default:
        throw new Error('unexpected cell index');
    }
  });

  tableBody.append(...sorted);
});
