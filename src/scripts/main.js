'use strict';

const people = [...document.querySelectorAll('tbody tr')];
const titleList = [...document.querySelectorAll(`thead th`)];
const table = document.querySelector('tbody');

function sortType(index) {
  return function(current, next) {
    let currentPerson = current.children[index]
      .textContent
      .replace(/[$,]/g, '');

    let nextPerson = next.children[index]
      .textContent
      .replace(/[$,]/g, '');

    if (!isNaN(currentPerson)) {
      currentPerson = +currentPerson;
      nextPerson = +nextPerson;
    };

    return currentPerson > nextPerson ? 1 : -1;
  };
};

for (const title of titleList) {
  title.addEventListener('click', () => {
    people.sort(sortType(title.cellIndex));
    table.append(...people);
  });
};
