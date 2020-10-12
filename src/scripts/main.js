'use strict';

const table = document.querySelector('table');

const sorter = {
  'number': (a, b) => toNumber(a) - toNumber(b),
  'string': (a, b) => a.localeCompare(b),
};

function toNumber(string) {
  return Number(string.split(',').join('').split('$').join(''));
}

table.addEventListener('click', event => {
  if ([...table.rows[0].cells].includes(event.target)) {
    const index = [...table.rows[0].cells].indexOf(event.target);

    const people = table.tBodies[0].rows;

    const sortedPeople = [...people].sort((prev, next) => {
      const prevCell = prev.cells[index].textContent;
      const nextCell = next.cells[index].textContent;

      return sorter[typeof toNumber(prevCell)](prevCell, nextCell);
    });

    table.tBodies[0].append(...sortedPeople);
  }
});
