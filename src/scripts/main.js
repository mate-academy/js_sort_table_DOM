'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tr = tbody.rows;
const sortByIndex = (items, index) => [...items].sort((a, b) =>
  a.children[index].textContent < b.children[index].textContent ? -1 : 1);

const sortByNumber = (items, index) => [...items].sort((a, b) =>
  +a.children[index].textContent.slice(1).split(',').join('')
    - +b.children[index].textContent.slice(1).split(',').join(''));

thead.addEventListener('click', (e) => {
  switch (e.target.textContent) {
    case 'Name':
      tbody.append(...sortByIndex(tr, 0));
      break;

    case 'Position':
      tbody.append(...sortByIndex(tr, 1));
      break;

    case 'Age':
      tbody.append(...sortByIndex(tr, 2));
      break;

    case 'Salary':
      tbody.append(...sortByNumber(tr, 3));

      break;
  }
});
