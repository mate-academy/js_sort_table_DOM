'use strict';

const tbody = document.querySelector('tbody');
const trHead = document.querySelector('thead');
const thHead = [...[...trHead.rows][0].children];

for (let i = 0; i < thHead.length; i++) {
  thHead[i].addEventListener('click', (e) => {
    const sorted = [...tbody.rows]
      .sort((a, b) => {
        if (i === 3) {
          return f(a.cells[i].innerHTML) - f(b.cells[i].innerHTML);
        }

        return a.cells[i].innerHTML > b.cells[i].innerHTML ? 1 : -1;
      });

    tbody.append(...sorted);
  });
}

function f(str) {
  return +(str.replace(/\D/g, ''));
};
