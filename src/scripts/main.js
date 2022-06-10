'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tableRow = tbody.rows;

thead.addEventListener('click', (e) => {
  const sortBy = e.target.textContent;
  const arrOfRow = [...tableRow];
  const indexEl = [...thead.rows[0].cells].indexOf(e.target);

  switch (sortBy) {
    case 'Name':
    case 'Position':
      arrOfRow.sort((a, b) =>
        (a.children[indexEl].textContent)
          .localeCompare(b.children[indexEl].textContent)
      );
      break;

    case 'Age':
      arrOfRow.sort((a, b) =>
        (a.children[indexEl].textContent) - (b.children[indexEl].textContent));
      break;

    case 'Salary':
      arrOfRow.sort((a, b) =>
        (a.children[indexEl].textContent.slice(1).split(',').join(''))
          - (b.children[indexEl].textContent.slice(1).split(',').join('')));
      break;

    default:
      return arrOfRow;
  }

  arrOfRow.forEach(el => tbody.append(el));
});
