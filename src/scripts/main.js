'use strict';

const table = document.querySelector('table');
const people = table.querySelector('tbody');
const title = table.tHead.querySelectorAll('th');

table.tHead.addEventListener('click', (e) => {
  const index = [...title].indexOf(e.target);
  const list = [...people.children];

  list.sort((a, b) => {
    let first = a.children[index].textContent;
    let second = b.children[index].textContent;

    if (first[0] === '$') {
      first = +first.split(',').join('').slice(1);
      second = +second.split(',').join('').slice(1);
    }

    if (isNaN(first)) {
      return first.localeCompare(second);
    }

    return first - second;
  });

  people.append(...list);
});
