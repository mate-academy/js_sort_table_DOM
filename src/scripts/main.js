'use strict';

const list = document.querySelector('tbody');
const table = document.querySelector('table');
const people = [...list.querySelectorAll('tr')];
const menu = {
  Name: 0,
  Position: 1,
  Age: 2,
  Salary: 3,
};

function convert(inputSalary) {
  return +(inputSalary.slice(1, -1).split(',').join(''));
}

function sort(position) {
  return people.sort((a, b) => {
    const itemA = a.children[position].innerText;
    const itemB = b.children[position].innerText;

    if (position === 3) {
      return convert(itemA) - convert(itemB);
    }

    if (position === 2) {
      return +itemA - +itemB;
    }

    return itemA.localeCompare(itemB);
  });
}

table.addEventListener('click', (e) => {
  const result = sort(menu[e.target.textContent]);

  list.append(...result);
});
