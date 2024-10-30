'use strict';

const head = document.querySelector('thead');
const body = document.querySelector('tbody');
const employees = [...document.querySelector('tbody').children];

head.addEventListener('click', (e) => {
  const index = e.target.cellIndex;

  employees.sort((row1, row2) => {
    const item1 = row1.children[index].textContent;
    const item2 = row2.children[index].textContent;

    if (index <= 1) {
      return item1.localeCompare(item2);
    }

    if (index === 2) {
      return +item1 - +item2;
    }

    if (index === 3) {
      return parseFloat(item1.slice(1)) - parseFloat(item2.slice(1));
    }
  });

  body.innerHTML = '';

  employees.forEach((row) => {
    body.append(row);
  });
});
