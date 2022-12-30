'use strict';

const head = document.querySelector('thead');
const body = document.querySelector('tbody');

const copyBodyEl = [...body.children];

head.addEventListener('click', (event) => {
  const itemId = event.target.cellIndex;

  const sort = copyBodyEl.sort((a, b) => {
    let first = a.cells[itemId].textContent;
    let second = b.cells[itemId].textContent;

    if (first.slice(0, 1) === '$') {
      first = first.replace(/[^+\d]/g, '');
      second = second.replace(/[^+\d]/g, '');

      return first - second;
    }

    return first.localeCompare(second);
  });

  body.append(...sort);
});
