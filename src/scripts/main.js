'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tr = tbody.rows;
let sortNames;

thead.addEventListener('click', (e) => {
  switch (e.target.textContent) {
    case 'Name':
      sortNames = function(arr) {
        return [...arr].sort((a, b) =>
          a.children[0].textContent < b.children[0].textContent ? -1 : 1);
      };

      tbody.append(...sortNames(tr));
      break;

    case 'Position':
      sortNames = function(arr) {
        return [...arr].sort((a, b) =>
          a.children[1].textContent < b.children[1].textContent ? -1 : 1);
      };

      tbody.append(...sortNames(tr));
      break;

    case 'Age':
      sortNames = function(arr) {
        return [...arr].sort((a, b) =>
          a.children[2].textContent < b.children[2].textContent ? -1 : 1);
      };

      tbody.append(...sortNames(tr));
      break;

    case 'Salary':
      sortNames = function(arr) {
        return [...arr].sort((a, b) =>
          +a.children[3].textContent.slice(1).split(',').join('')
            - +b.children[3].textContent.slice(1).split(',').join(''));
      };

      tbody.append(...sortNames(tr));

      break;
  }
});
