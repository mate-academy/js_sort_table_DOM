'use strict';

function sortItems(items, i) {
  function convertToNum(str) {
    return +str.slice(1).split(',').join('');
  }

  items.sort((tr1, tr2) => {
    const a = tr1.cells[i].innerText;
    const b = tr2.cells[i].innerText;

    switch (true) {
      case a[0].toLowerCase() !== a[0].toUpperCase():
        return a.localeCompare(b);

      case a[0].startsWith('$'):
        return convertToNum(a) - convertToNum(b);

      default:
        return +a - +b;
    }
  });

  return items;
}

const headers = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const tBodyRows = [...tBody.rows];

headers.addEventListener('click', (e) => {
  const index = e.target.cellIndex;
  const sortElems = sortItems(tBodyRows, index);

  tBody.append(...sortElems);
});
