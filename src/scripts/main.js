'use strict';

const rows = document.querySelector('tbody').rows;
const rowsForSort = [...rows];

const tabelHead = document.querySelector('thead').children[0];

tabelHead.addEventListener('click', e => {
  const clickedIndex = e.target.cellIndex;

  const sorted = rowsForSort.sort((row1, row2) => {
    const cell1 = row1.children[clickedIndex].innerText;
    const cell2 = row2.children[clickedIndex].innerText;

    switch (e.target.innerText) {
      case 'Age':
        return cell1 - cell2;
      case 'Salary':
        return parseFloat(cell1.slice(1)) - parseFloat(cell2.slice(1));
      default:
        return cell1.localeCompare(cell2);
    }
  }
  );

  document.querySelector('tbody').append(...sorted);
});
