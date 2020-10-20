'use strict';

const table = document.querySelector('table');
const head = document.querySelector('thead');
const row = [...table.tHead.rows[0].children];

function toNumber(string) {
  const searchNumber = string.match(/[0-9]/g);

  if (searchNumber) {
    return Number(searchNumber.join(''));
  }

  return string;
}

head.addEventListener('click', event => {
  const target = event.target;

  if (row.includes(target)) {
    const findIndex = target.cellIndex;

    const people = table.tBodies[0].rows;

    const sortedPeople = [...people].sort((a, b) => {
      const prev = a.cells[findIndex].textContent;
      const next = b.cells[findIndex].textContent;

      return sorted[typeof toNumber(prev)](prev, next);
    });

    table.tBodies[0].append(...sortedPeople);
  }
});

const sorted = {
  'string': (a, b) => a.localeCompare(b),
  'number': (a, b) => toNumber(a) - toNumber(b),
};
