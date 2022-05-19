'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tableRow = tbody.rows;

thead.addEventListener('click', (e) => {
  const sortBy = e.target.textContent;
  const arrOfRow = [...tableRow];

  switch (sortBy) {
    case 'Name':
      arrOfRow.sort((a, b) =>
        (a.children[0].textContent).localeCompare(b.children[0].textContent));
      break;

    case 'Position':
      arrOfRow.sort((a, b) =>
        (a.children[1].textContent).localeCompare(b.children[1].textContent));
      break;

    case 'Age':
      arrOfRow.sort((a, b) =>
        (a.children[2].textContent) - (b.children[2].textContent));
      break;

    case 'Salary':
      arrOfRow.sort((a, b) =>
        (a.children[3].textContent.slice(1).split(',').join(''))
          - (b.children[3].textContent.slice(1).split(',').join('')));
      break;

    default:
      return arrOfRow;
  }

  arrOfRow.forEach(el => tbody.append(el));
});
