'use strict';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const rows = [...tbody.rows];

table.addEventListener('click', e => {
  if (!e.target.closest('th')) {
    return;
  };

  switch (e.target.textContent) {
    case 'Name':
      rows.sort((a, b) =>
        a.children[0].textContent.localeCompare(b.children[0].textContent));
      break;

    case 'Position':
      rows.sort((a, b) =>
        a.children[1].textContent.localeCompare(b.children[1].textContent));
      break;

    case 'Age':
      rows.sort((a, b) =>
        a.children[2].textContent - b.children[2].textContent);
      break;

    case 'Salary':
      rows.sort((a, b) =>
        a.children[3].textContent.slice(1).split(',').join('')
        - b.children[3].textContent.slice(1).split(',').join(''));
      break;
  }

  rows.forEach(item => tbody.append(item));
});
