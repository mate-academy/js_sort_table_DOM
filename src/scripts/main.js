'use strict';

const sortTable1 = function(table, column) {
  table.sort(function(a, b) {
    let aItem = a.children[column].innerHTML;
    let bItem = b.children[column].innerHTML;

    if (column === 3) {
      aItem
      = Number(a.children[3].innerHTML.replace(/\D/g, ''));

      bItem
      = Number(b.children[3].innerHTML.replace(/\D/g, ''));
    }

    if (aItem > bItem) {
      return 1;
    }

    if (aItem < bItem) {
      return -1;
    }

    return 0;
  });

  return table;
};

const tbody = document.querySelector('tbody');
const rows = [...tbody.rows];

document.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const parentRow = e.target.parentNode;
  const arr = [...parentRow.children];
  const column = arr.indexOf(e.target);

  sortTable1(rows, column);
  tbody.append(...rows);
});
