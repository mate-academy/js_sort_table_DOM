'use strict';

// write code here
const thead = document.querySelector('thead');
const table = document.querySelector('table');

thead.addEventListener('click', e => {
  const item = e.target;

  sortGrid(item.cellIndex, item.textContent);
});

function sortGrid(colNum, type) {
  const tbody = table.querySelector('tbody');
  const tr = tbody.querySelectorAll('tr');
  const rowsArray = [...tr];

  let compare;

  switch (type) {
    case 'Age':
      compare = function(a, b) {
        return a.children[colNum].textContent - b.children[colNum].textContent;
      };
      break;

    case 'Position':
      compare = function(a, b) {
        return a.children[colNum].textContent
          .localeCompare(b.children[colNum].textContent);
      };
      break;

    case 'Name':
      compare = function(a, b) {
        return a.children[colNum].textContent
          .localeCompare(b.children[colNum].textContent);
      };
      break;

    case 'Salary':
      compare = function(a, b) {
        const textA = a.children[colNum].textContent
          .split('$').join('').split(',').join('');
        const textB = b.children[colNum].textContent
          .split('$').join('').split(',').join('');

        return textA - textB;
      };
      break;
  }

  rowsArray.sort(compare);

  tbody.append(...rowsArray);
}
