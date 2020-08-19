'use strict';

const rows = [...document.querySelectorAll('tbody tr')];

for (let i = 0; i < 4; i++) {
  document.querySelector(`thead tr`).children[i].onclick = () => {
    rows.sort(sorterConstructor(i));
    document.querySelector('tbody').append(...rows);
  };
};

function sorterConstructor(sortby) {
  return function(a, b) {
    let itemA = a.children[sortby].innerHTML;
    let itemB = b.children[sortby].innerHTML;

    if (!isNaN(itemA.split('$').join('').split(',').join(''))) {
      itemA = +itemA.split('$').join('').split(',').join('');
      itemB = +itemB.split('$').join('').split(',').join('');
    };

    return itemA > itemB ? 1 : -1;
  };
};
