'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tr = tbody.rows;

thead.addEventListener('click', e => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  if (e.target.textContent === 'Name') {
    const sortNames = function(arr) {
      return [...arr].sort((a, b) =>
        a.children[0].textContent < b.children[0].textContent ? -1 : 1);
    };

    tbody.append(...sortNames(tr));
  }

  if (e.target.textContent === 'Position') {
    const sortPosition = function(arr) {
      return [...arr].sort((a, b) =>
        a.children[1].textContent < b.children[1].textContent ? -1 : 1);
    };

    tbody.append(...sortPosition(tr));
  }

  if (e.target.textContent === 'Age') {
    const sortAges = function(arr) {
      return [...arr].sort((a, b) =>
        +a.children[2].textContent - +b.children[2].textContent);
    };

    tbody.append(...sortAges(tr));
  }

  if (e.target.textContent === 'Salary') {
    const sortSalaries = function(arr) {
      return [...arr].sort((a, b) =>
        +a.children[3].textContent.slice(1).split(',').join('')
          - +b.children[3].textContent.slice(1).split(',').join(''));
    };

    tbody.append(...sortSalaries(tr));
  }
});
