'use strict';

const HEADERS = {
  name: 'Name',
  position: 'Position',
  age: 'Age',
  salary: 'Salary',
};

const tbody = document.querySelector('tbody');
const list = document.querySelector('tbody').children;
const head = document.querySelector('thead').children[0];

head.addEventListener('click', sort);

function sort(header) {
  const index = [...head.children].indexOf(header.target);

  const sortedList = [...list].sort((a, b) => {
    const rowA = a.children[index].innerText;
    const rowB = b.children[index].innerText;

    switch (header.target.innerText) {
      case HEADERS.name:
      case HEADERS.position:
        return rowA.localeCompare(rowB);

      case HEADERS.age:
        return +rowA - +rowB;

      case HEADERS.salary:
        return toNum(rowA) - toNum(rowB);

      default:
        return 0;
    }
  });

  tbody.replaceChildren(...sortedList);
}

function toNum(str) {
  return +str.slice(1).replaceAll(',', '');
}
