'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const tableRows = [...tableBody.rows];

tableHead.addEventListener('click', e => {
  const i = e.target.cellIndex;

  tableRows.sort((a, b) => {
    let first = a.cells[i].innerText;
    let second = b.cells[i].innerText;

    if (i === 3) {
      first = +first.slice(1).replace(',', '');
      second = +second.slice(1).replace(',', '');

      return first - second;
    }

    return first.localeCompare(second);
  });

  tableBody.append(...tableRows);
});
