'use strict';

const employees = [...document.querySelectorAll('tbody tr')];
const valueForClick = [...document.querySelectorAll(`thead th`)];

function convertToSort(index) {
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

for (const value of valueForClick) {
  value.onclick = () => {
    employees.sort(convertToSort(valueForClick.indexOf(value)));
    document.querySelector('tbody').append(...employees);
  };
};
