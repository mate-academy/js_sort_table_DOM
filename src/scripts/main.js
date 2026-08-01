'use strict';

const table = document.querySelector('table');
const tableBody = table.querySelector('tbody');

table.querySelector('thead').addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName !== 'TH') {
    return;
  }

  let sortColumn = -1;

  for (let i = 0; i < target.parentElement.children.length; i++) {
    if (target.parentElement.children[i] === target) {
      sortColumn = i;
      break;
    }
  }

  if (sortColumn < 0) {
    return;
  }

  const sorted = [...tableBody.rows].sort((row1, row2) => {
    let row1Column = row1.children[sortColumn].textContent;
    let row2Column = row2.children[sortColumn].textContent;

    if (/^\$/.test(row1Column)) {
      row1Column = +row1Column.replace(/\$|,/g, '');
      row2Column = +row2Column.replace(/\$|,/g, '');
    }

    return compare(row1Column, row2Column);
  });

  tableBody.append(...sorted);

  function compare(elem1, elem2) {
    switch (typeof elem1) {
      case 'string':
        return elem1.localeCompare(elem2);
      case 'number':
        return elem1 - elem2;
    }
  }
});
