'use strict';

const tHead = document.querySelector('thead').firstElementChild;

tHead.addEventListener('click', (e) => {
  const column = [...tHead.children].indexOf(e.target);
  const tbody = document.querySelector('tbody');
  const rows = [...tbody.children];

  rows
    .sort((row1, row2) => {
      let sortCell1 = row1.children[column].innerText;
      let sortCell2 = row2.children[column].innerText;

      if (column === 2) {
        sortCell1 = +sortCell1;
        sortCell2 = +sortCell2;

        return sortCell1 - sortCell2;
      }

      if (column === 3) {
        sortCell1 = +sortCell1.slice(1).replace(',', '');
        sortCell2 = +sortCell2.slice(1).replace(',', '');

        return sortCell1 - sortCell2;
      }

      return sortCell1.localeCompare(sortCell2);
    })
    .forEach((row) => {
      tbody.append(row);
    });
});
