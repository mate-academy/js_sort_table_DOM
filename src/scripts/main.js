'use strict';

const tableBody = document.querySelector('tbody');
const persons = [...tableBody.querySelectorAll('tr')];

function getSalary(el) {
  return el.replace(/\D/g, '');
}

document.querySelector('thead').addEventListener('click', (e) => {
  const whereСlicked = e.target;

  persons.sort((a, b) => {
    switch (whereСlicked.innerText) {
      case 'Name':
        return a.children[whereСlicked.cellIndex].innerText
          .localeCompare(b.children[whereСlicked.cellIndex].innerText);

      case 'Position':
        return a.children[whereСlicked.cellIndex].innerText
          .localeCompare(b.children[whereСlicked.cellIndex].innerText);

      case 'Age':
        return +a.children[whereСlicked.cellIndex].innerText
        - +b.children[whereСlicked.cellIndex].innerText;

      case 'Salary':
        return getSalary(a.children[whereСlicked.cellIndex].innerText)
        - getSalary(b.children[whereСlicked.cellIndex].innerText);
    }
  });

  tableBody.append(...persons);
});
