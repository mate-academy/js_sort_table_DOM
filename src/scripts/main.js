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
    let itemA = a.children[sortby].innerHTML
      .split('$').join('').split(',').join('');
    let itemB = b.children[sortby].innerHTML
      .split('$').join('').split(',').join('');

    if (!isNaN(itemA)) {
      itemA = +itemA;
      itemB = +itemB;
    };

    return itemA > itemB ? 1 : -1;
  };
};
