'use strict';

const tbody = document.querySelector('tbody');
const tHead = document.querySelector('thead');
const thHead = [...[...tHead.rows][0].children];

tHead.addEventListener('click', (e) => {
  const sorted = [...tbody.rows]
    .sort((a, b) => {
      const i = thHead.indexOf(e.target);

      if (e.target.textContent === 'Salary') {
        return f(a.cells[i].innerHTML) - f(b.cells[i].innerHTML);
      }

      return a.cells[i].innerHTML > b.cells[i].innerHTML ? 1 : -1;
    });

  tbody.append(...sorted);
});

function f(str) {
  return +(str.replace(/\D/g, ''));
};
