'use strict';

// write code here
const head = document.querySelector('thead');
const body = document.querySelectorAll('tbody tr');
const tbody = document.querySelector('tbody');

function converter(ifSalary) {
  return ifSalary.replace('$', '').replace(',', '');
}

head.addEventListener('click', (e) => {
  const sortedList = [...body].sort((first, second) => {
    const index = e.target.cellIndex;
    const firstResult = converter(first.children[index].innerText);
    const secondResult = converter(second.children[index].innerText);

    if (isNaN(+firstResult)) {
      return firstResult.localeCompare(secondResult);
    } else {
      return firstResult - secondResult;
    }
  });

  tbody.append(...sortedList);
});
