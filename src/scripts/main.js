'use strict';

const sortTable1 = function(table, column) {
  table.sort(function(a, b) {
    let aItem = a.children[column].innerHTML;
    let bItem = b.children[column].innerHTML;

    if (column === 3) {
      aItem = Number(a.children[3].innerHTML.slice(1, 10).split(',').join(''));
      bItem = Number(b.children[3].innerHTML.slice(1, 10).split(',').join(''));
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

  let column;

  switch (e.target.innerHTML) {
    case 'Name': {
      column = 0;
      break;
    }

    case 'Position': {
      column = 1;
      break;
    }

    case 'Age': {
      column = 2;
      break;
    }

    case 'Salary': {
      column = 3;
      break;
    }
  }

  sortTable1(rows, column);
  tbody.append(...rows);
});
