'use strict';

const employeesContainer = document.querySelector('tbody');
const employeesHeader = document.querySelector('thead');
const employees = [...employeesContainer.children];

employeesHeader.addEventListener('click', (eventOne) => {
  const index = eventOne.target.cellIndex;

  const list = [...employees];

  list.sort(
    (a, b) => compare(
      a.children[index].textContent, b.children[index].textContent
    )
  );

  employeesContainer.append(...list);
});

function compare(first, second) {
  const firstElement = parseSalary(first);
  const secondElement = parseSalary(second);

  if (!isNaN(firstElement)) {
    return firstElement - secondElement;
  } else {
    return first.localeCompare(second);
  }
}

function parseSalary(salary) {
  return parseInt(salary.replace(/[,$]/g, ''));
}
