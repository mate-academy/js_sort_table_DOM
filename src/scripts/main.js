'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tr = tbody.rows;

thead.addEventListener('click', e => {
  let sort;
  const index = e.target.cellIndex;

  if (e.target.tagName !== 'TH') {
    return;
  }

  switch (e.target.textContent) {
    case 'Age':
      sort = function(arr, i) {
        return [...arr].sort((a, b) =>
          +a.children[i].textContent - +b.children[i].textContent);
      };
      break;

    case 'Salary':
      sort = function(arr, i) {
        return [...arr].sort((a, b) =>
          +a.children[i].textContent.slice(1).split(',').join('')
            - +b.children[i].textContent.slice(1).split(',').join('')
        );
      };
      break;

    default:
      sort = function(arr, i) {
        return [...arr].sort((a, b) =>
          a.children[i].textContent < b.children[i].textContent ? -1 : 1);
      };
  }

  tbody.append(...sort(tr, index));
});
