'use strict';

const table = document.querySelector('table');
const userList = document.querySelector('tbody');
const directions = [...table.tHead.querySelectorAll('th')].map(() => '');

table.tHead.addEventListener('click', (e) => {
  const target = e.target.closest('th');

  userList.append(...[...userList.rows]
    .sort(sortByTarget('cells', target)));
});

function sortByTarget(key, { cellIndex }) {
  const direction = directions[cellIndex] || 'asc';

  return (a, b) => {
    const x = normalize(a[key][cellIndex].textContent);
    const y = normalize(b[key][cellIndex].textContent);

    directions[cellIndex] = direction === 'asc' ? 'desc' : 'asc';

    return typeof x === 'number'
      ? (direction === 'asc') ? x - y : y - x
      : (direction === 'asc') ? x.localeCompare(y) : y.localeCompare(x);
  };
}

function normalize(element) {
  return /[$,]/g.test(element)
    ? Number(element.replace(/[$,]/g, ''))
    : element;
}
