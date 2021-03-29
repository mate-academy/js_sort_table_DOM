'use strict';

const head = document.querySelector('thead');
const body = document.querySelectorAll('tbody tr');
const tbody = document.querySelector('tbody');

function convertSalary(salary) {
  return salary.replace('$', '').replace(',', '');
}

head.addEventListener('click', (ev) => {
  const sortedList = [...body].sort((first, second) => {
    const index = ev.target.cellIndex;
    const firstResult = convertSalary(first.children[index].innerText);
    const secondResult = convertSalary(second.children[index].innerText);

    if (isNaN(+firstResult)) {
      return firstResult.localeCompare(secondResult);
    } else {
      return firstResult - secondResult;
    }
  });

  tbody.append(...sortedList);
});
