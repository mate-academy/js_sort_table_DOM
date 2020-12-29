'use strict';

// write code here
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', e => {
  const index = e.target.cellIndex;
  const employees = [...tbody.children];

  const sortedEmployees = employees.sort((a, b) => {
    let firstElem = a.cells[index].textContent;
    let secondElem = b.cells[index].textContent;

    if (firstElem[0] === '$') {
      firstElem = firstElem.slice(1).split(',').join('');
      secondElem = secondElem.slice(1).split(',').join('');
    }

    if (Number.isNaN(Number(firstElem))) {
      return firstElem.localeCompare(secondElem);
    }

    return firstElem - secondElem;
  });

  tbody.append(...sortedEmployees);
});
