'use strict';

// write code here
const table = document.querySelector('tbody');
const tabletHead = document.querySelector('thead');
const titles = [...tabletHead.querySelectorAll('th')];
const tabletRows = [...tabletHead.nextElementSibling.querySelectorAll('tr')];

function sortRows(rows, index) {
  const sorted = rows.sort((x, y) => {
    const first = x.children[index].textContent.replace(/[^a-zA-Z0-9 ]/g, '');
    const second = y.children[index].textContent.replace(/[^a-zA-Z0-9 ]/g, '');

    if (isNaN(+first)) {
      return first.localeCompare(second);
    } else {
      return first - second;
    }
  });

  sorted.forEach(x => table.append(x));
}

tabletHead.addEventListener('click', (ev) => {
  const columnIndex = titles.findIndex(x => x === ev.target);

  sortRows(tabletRows, columnIndex);
});
