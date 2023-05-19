'use strict';

const tableEl = document.querySelector('table');
const tHead = tableEl.querySelector('thead');

tHead.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return false;
  }

  sortTable(e.target, tableEl);
});

function sortTable(element, table) {
  // Get index of sorting column
  const index = [...element.parentElement.children].indexOf(element);

  const rows = [...table.querySelectorAll('tbody > tr')];

  rows.sort((a, b) => {
    // If sorting values is numbers
    if (getNumber(a.children[index].innerText)) {
      return getNumber(a.children[index].innerText)
        - getNumber(b.children[index].innerText);
    }

    // If sorting values is strings
    if (a.children[index].innerText < b.children[index].innerText) {
      return -1;
    }

    if (a.children[index].innerText > b.children[index].innerText) {
      return 1;
    }

    return 0;
  });
  table.querySelector('tbody').append(...rows);
}

// Parse number from string
function getNumber(string) {
  return parseInt(string.replace(/\D/g, ''));
}
