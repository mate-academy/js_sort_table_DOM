'use strict';

const title = document.querySelector('thead');
const el = [...document.querySelectorAll('tbody tr')];
const body = document.querySelector('tbody');

title.addEventListener('click', (e) => {
  const indexCol = e.target.cellIndex;

  el.sort((a, b) => {
    let first = a.children[indexCol].textContent;
    let second = b.children[indexCol].textContent;

    if (first.includes('$')) {
      first = parseFloat(first.replace(/\D/, ''));
      second = parseFloat(second.replace(/\D/, ''));
    }

    return isNaN(first) ? first.localeCompare(second) : first - second;
  });

  body.append(...el);
});
