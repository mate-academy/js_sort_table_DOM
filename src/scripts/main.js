'use strict';

const table = document.querySelector('table');

table.tHead.addEventListener('click', (e) => {
  const index = e.target.cellIndex;
  const tableBody = [...table.tBodies][0];

  const sorted = [ ...tableBody.rows ].sort((a, b) => {
    const aText = a.cells[index].innerText.replace(/\W/g, '');
    const bText = b.cells[index].innerText.replace(/\W/g, '');

    return !isNaN(parseFloat(aText)) ? +aText - +bText
      : aText.localeCompare(bText);
  });

  tableBody.append(...sorted);
});
