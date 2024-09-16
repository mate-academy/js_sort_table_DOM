'use strict';

const table = document.querySelector('table');
const userList = document.querySelector('tbody');
let currentTarget;
let direction;

table.tHead.addEventListener('click', (e) => {
  const target = e.target.closest('th');

  if (target !== currentTarget) {
    currentTarget = target;
    direction = 0;
  }

  userList.append(...[...userList.rows]
    .sort(sortByTarget('cells', target)));
});

function sortByTarget(key, { cellIndex }) {
  direction = direction ? 0 : 1;

  return (a, b) => {
    const x = normalize(a[key][cellIndex].textContent);
    const y = normalize(b[key][cellIndex].textContent);

    if (typeof x !== 'number') {
      return (direction)
        ? x.localeCompare(y)
        : y.localeCompare(x);
    }

    return (direction)
      ? x - y
      : y - x;
  };
}

function normalize(element) {
  return /[$,]/g.test(element)
    ? parseInt(element.replace(/[$,]/g, ''))
    : element;
}
