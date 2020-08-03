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

  function sortNumber(value1, value2, index) {
    return value1.children[index].innerText - value2.children[index].innerText;
  }

  function clearSalary(salary, index) {
    return salary.children[index].innerText
      .split('$').join('').split(',').join('.');
  }

  function sortRowsBy(arr, callback, index) {
    return [...arr].sort((a, b) => callback(a, b, index));
  }

  switch (target) {
    case NAME :
      tableBody.append(...sortRowsBy(tableBody.children, sortString, 0));
      break;
    case POSITION :
      tableBody.append(...sortRowsBy(tableBody.children, sortString, 1));
      break;
    case AGE :
      tableBody.append(...sortRowsBy(tableBody.children, sortNumber, 2));
      break;
    case SALARY :
      tableBody.append(...[...tableBody.children].sort((a, b) => {
        return clearSalary(a, 3) - clearSalary(b, 3);
      }));
  }
});
