'use strict';

// write code here
const tbody = document.querySelectorAll('tbody tr');
const thead = document.querySelectorAll('thead th');

const prnt = tbody[0].parentElement;

const strInNumber = (str) => {
  return str.replace(/[^\d]/g, '') * 1;
};

const sortTable = (column) => {
  [...tbody].sort((item, item1) => {
    const sortItem = item.children[column].textContent;
    const sortItem1 = item1.children[column].textContent;

    if (strInNumber(sortItem)) {
      return strInNumber(sortItem1) - strInNumber(sortItem);
    }

    if (sortItem1 < sortItem) {
      return 1;
    }

    if (sortItem1 > sortItem) {
      return -1;
    }

    return 0;
  }).forEach(function(node) {
    prnt.appendChild(node);
  });
};

thead.forEach((elem, index) => {
  elem.onclick = () => {
    sortTable(index);
  };
});
