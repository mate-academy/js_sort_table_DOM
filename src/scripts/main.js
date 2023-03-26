'use strict';

const thead = document.querySelector('thead tr');
const table = document.querySelector('tbody');
const tr = [...table.children];

thead.addEventListener('click', e => {
  const sorted = tr.sort((a, b) => {
    const first = a.children[e.target.cellIndex].innerText;
    const second = b.children[e.target.cellIndex].innerText;

    switch (e.target.cellIndex) {
      case 0:
      case 1:
        return first.localeCompare(second);
      case 2:
        return first - second;
      case 3:
        return +first.slice(1).split(',').join('')
        - +second.slice(1).split(',').join('');
    }
  });

  sorted.forEach(item => table.append(item));
});
