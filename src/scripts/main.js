'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  const sortBy = e.target.closest('th');

  if (!sortBy || !table.contains(sortBy)) {
    return;
  }

  sortTable(sortBy.cellIndex, sortBy.innerHTML);
});

function normalizeSalary(salary) {
  return +salary.slice(1).split(',').join('');
}

function sortTable(cellIndex, sortBy) {
  const tbody = document.querySelector('tbody');
  const people = [...tbody.children];

  const whichRow = (person) => {
    return person.cells[cellIndex].innerHTML;
  };

  switch (sortBy) {
    case 'Name':
    case 'Position':
      people.sort((a, b) => whichRow(a).localeCompare(whichRow(b)));
      break;

    case 'Age':
      people.sort((a, b) => +whichRow(a) - +whichRow(b));
      break;

    case 'Salary':
      people.sort((a, b) => (+normalizeSalary(whichRow(a)))
        - (+normalizeSalary(whichRow(b))));
      break;
  }

  tbody.append(...people);
}
