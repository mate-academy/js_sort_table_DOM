'use strict';

const table = document.querySelector('table');
const person = document.querySelectorAll('tr');
const peopleList = [...person].slice(1, -1);

const appendElements = (list) => table.children[1].append(...list);

table.children[0].addEventListener('click', (handler) => {
  switch (handler.target.innerText) {
    case 'Name':
      peopleList.sort((a, b) => (
        a.children[0].innerText.localeCompare(b.children[0].innerText)
      ));

      appendElements(peopleList);
      break;

    case 'Position':
      peopleList.sort((a, b) => (
        a.children[1].innerText.localeCompare(b.children[1].innerText)
      ));

      appendElements(peopleList);
      break;

    case 'Age':
      peopleList.sort((a, b) => (
        Number(a.children[2].innerText) - Number(b.children[2].innerText)
      ));

      appendElements(peopleList);
      break;

    case 'Salary':
      const getSalary = (el) => (
        Number(el.children[3].innerText.slice(1).split(',').join(''))
      );

      peopleList.sort((a, b) => getSalary(a) - getSalary(b));

      appendElements(peopleList);
      break;

    default:
      throw new Error();
  }
});
