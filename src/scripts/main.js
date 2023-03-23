'use strict';

const body = document.querySelector('tbody');
const head = document.querySelector('thead');
const pers = [...body.querySelectorAll('tr')];

head.addEventListener('click', e => {
  const coords = e.target;

  pers.sort((a, b) => {
    switch (coords.innerText) {
      case 'Name':
        return a.children[coords.cellIndex].innerText
          .localeCompare(b.children[coords.cellIndex].innerText);

      case 'Position':
        return a.children[coords.cellIndex].innerText
          .localeCompare(b.children[coords.cellIndex].innerText);

      case 'Age':
        return +a.children[coords.cellIndex].innerText
          - +b.children[coords.cellIndex].innerText;

      case 'Salary':
        return trimmer(a.children[coords.cellIndex].innerText)
          - trimmer(b.children[coords.cellIndex].innerText);
    }
  });

  body.append(...pers);
});

function trimmer(salary) {
  return salary.replace(/\D/g, '');
}
