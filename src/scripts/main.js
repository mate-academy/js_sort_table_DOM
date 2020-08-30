'use strict';

// write code here
const thead = document.querySelector('thead');
const tbody = document.querySelectorAll('tbody tr');

thead.addEventListener('click', event => {
  const th = event.target;
  const indexOfClick = th.cellIndex;
  const rows = [...tbody];

  rows.sort((a, b) => {
    let aCellContent = a.cells[indexOfClick].textContent;
    let bCellContent = b.cells[indexOfClick].textContent;

    if (aCellContent.includes('$')) {
      aCellContent = +aCellContent.slice(1).split(',').join('.');
      bCellContent = +bCellContent.slice(1).split(',').join('.');
    }

    if (aCellContent < bCellContent) {
      return 1;
    }

    if (aCellContent > bCellContent) {
      return -1;
    }

    return 0;
  });

  for (let i = 0; i < rows.length; i++) {
    document.querySelector('tbody')
      .insertAdjacentElement('afterbegin', rows[i]);
  }
});
