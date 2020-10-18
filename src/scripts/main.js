'use strict';

const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');
const rows = [...tableBody.querySelectorAll('tr')];

table.addEventListener('click', event => {
  const title = event.target.closest('th');

  rows.sort((a, b) => {
    const index = title.cellIndex;
    const prevItem = a.children[index].textContent;
    const nextItem = b.children[index].textContent;

    if (prevItem.includes('$')) {
      return parseFloat(prevItem.replace('$', ''))
        - parseFloat(nextItem.replace('$', ''));
    }

    if (+prevItem.typeOf !== 'number') {
      return prevItem.localeCompare(nextItem);
    }

    return +prevItem - +nextItem;
  });

  tableBody.append(...rows);
});
