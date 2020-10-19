'use strict';

const table = document.querySelector('table');

function toNumber(string) {
  const searchNumber = string.match(/[0-9]/g);

  if (searchNumber) {
    return Number(searchNumber.join(''));
  }

  return string;
}

table.addEventListener('click', event => {
  const target = event.target;

  if ([...table.rows[0].cells].includes(target)) {
    const findIndex = [...table.rows[0].cells].indexOf(target);

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
