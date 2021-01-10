'use strict';

const container = document.querySelector('tbody');
const content = [...document.querySelectorAll('tbody > tr')];

function sortColumn(column) {
  if (column === 3) {
    content.sort((a, b) => {
      return toNumber(a.children[column].innerText)
        - toNumber(b.children[column].innerText);
    });
  } else {
    content.sort((a, b) => {
      if (a.children[column].innerText > b.children[column].innerText) {
        return 1;
      }

      if (a.children[column].innerText < b.children[column].innerText) {
        return -1;
      }

      return 0;
    });
  }

  container.append(...content);
}

function toNumber(str) {
  return Number(str.slice(1).split(',').join(''));
}

const thead = document.querySelector('thead');

thead.addEventListener('click', e => {
  const columnNumber = [...document.querySelectorAll('thead > tr > th')]
    .indexOf(e.target);

  sortColumn(columnNumber);
});
