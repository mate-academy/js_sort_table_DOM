'use strict';

const tableBody = document.querySelector('tbody');
const persons = [...tableBody.querySelectorAll('tr')];

function getSalary(el) {
  return el.replace(/\D/g, '');
}

document.querySelector('thead').addEventListener('click', (e) => {
  persons.sort((a, b) => {
    switch (e.target.innerText) {
      case 'Name':
        return a.children[e.target.cellIndex].innerText
          .localeCompare(b.children[e.target.cellIndex].innerText);

      case 'Position':
        return a.children[e.target.cellIndex].innerText
          .localeCompare(b.children[e.target.cellIndex].innerText);

      case 'Age':
        return +a.children[e.target.cellIndex].innerText
        - +b.children[e.target.cellIndex].innerText;

      case 'Salary':
        return getSalary(a.children[e.target.cellIndex].innerText)
        - getSalary(b.children[e.target.cellIndex].innerText);
    }
  });

  tableBody.append(...persons);
});
