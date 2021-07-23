'use strict';

const table = document.querySelector('table');
const list = [...document.querySelectorAll('tbody tr')];

table.addEventListener('click', anEvent => {
  const clicking = anEvent.target.innerText;

  switch (clicking) {
    case 'Name':
      sortList(list, 0);
      break;

    case 'Position':
      sortList(list, 1);
      break;

    case 'Age':
      sortList(list, 2);
      break;

    case 'Salary':
      sortList(list, 3);
      break;
  };
});

function sortList(listForSorting, column) {
  listForSorting.sort((a, b) => {
    const innerA = a.children[column].innerText;
    const innerB = b.children[column].innerText;

    if (parseNum(innerA)) {
      return parseNum(innerB) - parseNum(innerA);
    } else {
      return innerA.localeCompare(innerB);
    };
  });

  listForSorting.forEach(elem => table.children[1].append(elem));
};

function parseNum(par) {
  let result = '';

  for (const char of par) {
    if ('1234567890'.includes(char)) {
      result += char;
    };
  };

  return +result;
};
