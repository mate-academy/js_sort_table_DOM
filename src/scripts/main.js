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
    if (column === 2) {
      if (+item1.children[column].textContent > +item.children[column].textContent) {
        return 1
      }
      if (+item1.children[column].textContent < +item.children[column].textContent) {
        return -1
      }
      return 0;
    }

    if (column !== 3) {
      if (item1.children[column].textContent > item.children[column].textContent) {
        return 1
      }
      if (item1.children[column].textContent < item.children[column].textContent) {
        return -1
      }
      return 0;
    }

    return strInNumber(
      item1.children[3].textContent) - strInNumber(
      item.children[3].textContent);
  }).forEach(function(node) {
    prnt.appendChild(node);
  });
};

thead.forEach((elem, index) => {
  elem.onclick = () => {
    sortTable(index);
  };
});
