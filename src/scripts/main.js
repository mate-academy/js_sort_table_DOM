'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tr = tbody.rows;
let sort;

thead.addEventListener('click', e => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  switch (e.target.textContent) {
    case 'Name':
      sort = function(arr) {
        return [...arr].sort((a, b) =>
          a.children[0].textContent < b.children[0].textContent ? -1 : 1);
      };
      break;

    case 'Position':
      sort = function(arr) {
        return [...arr].sort((a, b) =>
          a.children[1].textContent < b.children[1].textContent ? -1 : 1);
      };
      break;

    case 'Age':
      sort = function(arr) {
        return [...arr].sort((a, b) =>
          +a.children[2].textContent - +b.children[2].textContent);
      };
      break;

    case 'Salary':
      sort = function(arr) {
        return [...arr].sort((a, b) =>
          +a.children[3].textContent.slice(1).split(',').join('')
            - +b.children[3].textContent.slice(1).split(',').join(''));
      };
      break;

    default:
      return;
  }

  tbody.append(...sort(tr));
});
