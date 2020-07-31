'use strict';

const table = document.querySelector('table');
const header = table.children[0].firstElementChild;
const tableBody = table.children[1];

const NAME = header.children[0];
const POSITION = header.children[1];
const AGE = header.children[2];
const SALARY = header.children[3];

table.addEventListener('click', (event) => {
  const target = event.target;

  if (!target.closest('thead')) {
    return;
  }

  function sortString(value1, value2, index) {
    return value1.children[index].innerText
      .localeCompare(value2.children[index].innerText);
  }

  if (target === NAME) {
    const sortName = [...tableBody.children].sort((a, b) => {
      return sortString(a, b, 0);
    });

    tableBody.append(...sortName);
  }

  if (target === POSITION) {
    const sortPosition = [...tableBody.children].sort((a, b) => {
      return sortString(a, b, 1);
    });

    tableBody.append(...sortPosition);
  }

  if (target === AGE) {
    const sortAge = [...tableBody.children].sort((a, b) => {
      return a.children[2].innerText - b.children[2].innerText;
    });

    tableBody.append(...sortAge);
  }

  function clearSalary(salary) {
    return salary.split('$').join('').split(',').join('.');
  }

  if (target === SALARY) {
    const sortSalary = [...tableBody.children].sort((a, b) => {
      return clearSalary(a.children[3].innerText)
      - clearSalary(b.children[3].innerText);
    });

    tableBody.append(...sortSalary);
  }
});
