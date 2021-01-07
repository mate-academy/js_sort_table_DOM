'use strict';

// const rows = document.querySelectorAll('tr');
const rows = document.querySelector('table').children[1].children;
const rowsForSort = [...rows];

const [...tabelHeadIndexes] = document
  .querySelector('thead').children[0].children;

const tabelHead = document.querySelector('thead').children[0];

tabelHead.addEventListener('click', e => {
  const clickedIndex = tabelHeadIndexes.indexOf(e.target);

  const sorted = rowsForSort.sort((row1, row2) => {
    if (Number.isInteger(+row1.children[clickedIndex].innerText)) {
      return row1.children[clickedIndex].innerText
        - row2.children[clickedIndex].innerText;
    }

    if (row1.children[clickedIndex].innerText[0] === '$') {
      return parseFloat(row1.children[clickedIndex].innerText.slice(1))
       - parseFloat(row2.children[clickedIndex].innerText.slice(1));
    }

    return row1.children[clickedIndex].innerText
      .localeCompare(row2.children[clickedIndex].innerText);
  }
  );

  document.querySelector('tbody').append(...sorted);
});
