'use strict';

const tbody = document.getElementsByTagName('tbody')[0];

const getSalary = (number) =>
  +number.children[3].textContent.slice(1).split(',').join('');

const localeCompare = (a, b, index) =>
  b.children[index].textContent.localeCompare(a.children[index].textContent);

document.querySelector('tr').addEventListener('click', (e) => {
  const param = e.target.closest('th');

  const newList = Array(...tbody.children).sort((a, b) => {
    switch (param.textContent) {
      case 'Name':
        return localeCompare(a, b, 0);
      case 'Position':
        return localeCompare(a, b, 1);
      case 'Age':
        return +b.children[2].textContent - +a.children[2].textContent;
      default:
        return getSalary(b) - getSalary(a);
    }
  });

  newList.forEach((element) => tbody.prepend(element));
});
