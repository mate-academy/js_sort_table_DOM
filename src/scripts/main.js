'use strict';

const employees = [...document.querySelectorAll('tbody tr')];
const categories = [...document.querySelectorAll(`thead th`)];

for (const category of categories) {
  category.onclick = () => {
    employees.sort(sorterConstructor(categories.indexOf(category)));
    document.querySelector('tbody').append(...employees);
  };
};

function sorterConstructor(sortByIndex) {
  return function(a, b) {
    let itemA = a.children[sortByIndex].innerHTML
      .split('$').join('').split(',').join('');
    let itemB = b.children[sortByIndex].innerHTML
      .split('$').join('').split(',').join('');

    if (!isNaN(itemA)) {
      itemA = +itemA;
      itemB = +itemB;
    };

    return itemA > itemB ? 1 : -1;
  };
};
