'use strict';

const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');
const rows = [...tableBody.rows];

table.addEventListener('click', event => {
  const title = event.target.closest('th');

  if (title.parentNode.parentNode.tagName === 'TFOOT') {
    return;
  }

  rows.sort((a, b) => {
    const index = title.cellIndex;
    const prevItem = a.children[index].textContent;
    const nextItem = b.children[index].textContent;

    if (prevItem.includes('$')) {
      return parseFloat(prevItem.replace('$', ''))
        - parseFloat(nextItem.replace('$', ''));
    }

    return prevItem.localeCompare(nextItem);
  });

  tableBody.append(...rows);
});
