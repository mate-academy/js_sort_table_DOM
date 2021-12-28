'use strict';

const tbody = document.querySelector('tbody');

const sort = (target) => {
  let index = null;

  switch (target) {
    case 'Name':
      index = 0;
      break;

    case 'Position':
      index = 1;
      break;

    case 'Age':
      index = 2;
      break;

    case 'Salary':
      index = 3;
      break;
  }

  let sorted = null;

  if (index === 3) {
    sorted = [...tbody.rows].sort(
      (a, b) =>
        a.cells[index].innerHTML.replace(/[^0-9]/g, '')
        - b.cells[index].innerHTML.replace(/[^0-9]/g, ''));
  } else {
    sorted = [...tbody.rows].sort(
      (a, b) => a.cells[index].innerHTML > b.cells[index].innerHTML ? 1 : -1);
  }

  tbody.append(...sorted);
};

document.addEventListener('click', (eve) => {
  sort(eve.target.innerText);
});
