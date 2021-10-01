'use strict';

const tr = document.querySelector('tr');
const tbody = document.querySelector('tbody');
const people = [...document.querySelector('tbody').children];
const clone = [...people];

tr.addEventListener('click', (e) => {
  const sortBy = e.target.innerHTML;

  switch (sortBy) {
    case 'Name':
      clone.sort((a, b) =>
        (a.children[0].innerHTML > b.children[0].innerHTML) ? 1 : -1);
      break;
    case 'Position':
      clone.sort((a, b) =>
        (a.children[1].innerHTML > b.children[1].innerHTML) ? 1 : -1);
      break;
    case 'Age':
      clone.sort((a, b) =>
        (a.children[2].innerHTML > b.children[2].innerHTML) ? 1 : -1);
      break;
    case 'Salary':
      clone.sort((a, b) => {
        const first = a.children[3].innerHTML;
        const second = b.children[3].innerHTML;

        return transform(first) - transform(second);
      });
      break;
  }

  clone.forEach(person => tbody.append(person));
});

function transform(str) {
  return parseInt(str.split('$').join('').split(',').join(''));
}
