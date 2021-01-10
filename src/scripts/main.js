'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');

const people = [...tBody.children];

tHead.addEventListener('click', e => {
  switch (e.target.textContent) {
    case 'Name':
      sortBy('name');
      break;

    case 'Position':
      sortBy('position');
      break;

    case 'Age':
      sortBy('age');
      break;

    case 'Salary':
      sortBy('salary');
      break;

    default:
      break;
  }
});

const sortBy = (type) => {
  switch (type) {
    case 'name':
      people.sort((a, b) => {
        return a.children[0].textContent.localeCompare(b.children[0]
          .textContent);
      });
      break;

    case 'position':
      people.sort((a, b) => {
        return a.children[1].textContent.localeCompare(b.children[1]
          .textContent);
      });
      break;

    case 'age':
      people.sort((a, b) => {
        return +a.children[2].textContent - +b.children[2].textContent;
      });
      break;

    case 'salary':
      people.sort((a, b) => {
        const itemA = a.children[3].textContent.slice(1).split(',').join('');
        const itemB = b.children[3].textContent.slice(1).split(',').join('');

        return +itemA - +itemB;
      });
      break;

    default:
      break;
  }

  tBody.append(...people);
};
