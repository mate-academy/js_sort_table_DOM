'use strict';

const body = document.querySelector('tbody');
const head = document.querySelector('thead');
const pers = [...body.querySelectorAll('tr')];

head.addEventListener('click', e => {
  const coords = e.target;

  pers.sort((a, b) => {
    const textA = a.children[coords.cellIndex].innerText;
    const textB = b.children[coords.cellIndex].innerText;

    switch (coords.innerText) {
      case 'Name':
      case 'Position':
        return textA.localeCompare(textB);

      case 'Age':
        return +textA - +textB;

      case 'Salary':
        return trimmer(textA) - trimmer(textB);
    }
  });

  body.append(...pers);
});

function trimmer(salary) {
  return salary.replace(/\D/g, '');
}
