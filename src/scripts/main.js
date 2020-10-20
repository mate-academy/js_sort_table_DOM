'use strict';

const people = [...document.querySelectorAll('tbody tr')];
const titleList = [...document.querySelectorAll(`thead th`)];

function sortType(index) {
  return function(a, b) {
    let itemA = a.children[index]
      .innerHTML
      .replace(/[$,]/g, '');

    let itemB = b.children[index]
      .innerHTML
      .replace(/[$,]/g, '');

    if (!isNaN(itemA)) {
      itemA = +itemA;
      itemB = +itemB;
    };

    return itemA > itemB ? 1 : -1;
  };
};

for (const title of titleList) {
  title.onclick = () => {
    people.sort(sortType(titleList.indexOf(title)));
    document.querySelector('tbody').append(...people);
  };
};
