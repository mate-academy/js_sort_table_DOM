'use strict';

const tbody = document.querySelector('tbody');

const sort = (index) => {
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
  if (eve.target.innerText === 'Name') {
    sort(0);
  } else if (eve.target.innerText === 'Position') {
    sort(1);
  } else if (eve.target.innerText === 'Age') {
    sort(2);
  } else if (eve.target.innerText === 'Salary') {
    sort(3);
  }
});
