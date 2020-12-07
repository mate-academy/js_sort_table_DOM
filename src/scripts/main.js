'use strict';

const header = document.querySelector('thead');

header.addEventListener('click', (elem) => {
  const index = elem.target.cellIndex;

  if (elem.target.tagName === 'TH') {
    sortCol(tBody, index);
  }
});

const tBody = document.querySelector('tbody');

function toNumber(text) {
  return text.replace(/\D+/g, '');
}

function sortCol(list, col) {
  const sorted = [...list.children]
    .sort((a, b) => {
      if ((toNumber(a.children[col].innerText)) === '') {
        if (a.children[col].innerText < b.children[col].innerText) {
          return -1;
        }

        if (a.children[col].innerText > b.children[col].innerText) {
          return 1;
        }
      } else {
        return toNumber(a.children[col].innerText)
        - toNumber(b.children[col].innerText);
      }
    });

  tBody.append(...sorted);
}
