'use strict';

const tableBody = document.body.querySelectorAll('TBODY')[0];

const rows = [...tableBody.children];

function sortAlgorythm(e) {
  let index;

  switch (e.target.textContent) {
    case 'Name':
      index = 0;
      break;

    case 'Position':
      index = 1;
      break;

    case 'Age':
      index = 2;
      break;

    case 'Salary':
      index = 3;
      break;
  }

  if (
    e.target.parentElement.parentElement.tagName === 'THEAD'
  ) {
    if (e.target.textContent === 'Salary') {
      rows.sort(
        (prev, next) =>
          (
            +prev.children[index].textContent
              .slice(1).split(',').join('')
            > +next.children[index].textContent
              .slice(1).split(',').join('')
          )
            ? 1 : -1
      );
    } else {
      rows.sort(
        (prev, next) =>
          (
            prev.children[index].textContent
            > next.children[index].textContent
          )
            ? 1 : -1
      );
    }

    rows.forEach(el => tableBody.append(el));
  }
}

document.body.addEventListener('click', sortAlgorythm);
