'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const people = [...document.querySelectorAll('tbody tr')];

function toNumber(salary) {
  return +salary.slice(1).split(',').join('');
}

thead.addEventListener('click', e => {
  const i = e.target.cellIndex;

  if (e.target.textContent === 'Salary') {
    people.sort((a, b) =>
      toNumber(a.children[i].textContent)
      - toNumber(b.children[i].textContent));
  } else {
    people.sort((a, b) =>
      a.children[i].textContent.localeCompare(b.children[i].textContent));
  }

  tbody.append(...people);
});
