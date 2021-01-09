'use strict';

// write code here
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

function parseSalary(salary) {
  const [currency] = salary;

  if (currency === '$') {
    return +salary.slice(1).split(',').join('');
  }

  return salary;
}

thead.addEventListener('click', e => {
  const index = e.target.cellIndex;
  const employees = [...tbody.children];

  const sortedEmployees = employees.sort((a, b) => {
    const firstElem = parseSalary(a.cells[index].textContent);
    const secondElem = parseSalary(b.cells[index].textContent);

    if (Number.isNaN(+firstElem)) {
      return firstElem.localeCompare(secondElem);
    }

    return firstElem - secondElem;
  });

  tbody.append(...sortedEmployees);
});
