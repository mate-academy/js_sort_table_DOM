'use strict';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const rows = [...tbody.rows];

table.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  switch (e.target.innerText) {
    case 'Name':
      rows.sort((a, b) =>
        (a.children[0].innerText).localeCompare(b.children[0].innerText));
      break;

    case 'Position':
      rows.sort((a, b) =>
        (a.children[1].innerText).localeCompare(b.children[1].innerText));
      break;

    case 'Age':
      rows.sort((a, b) =>
        (a.children[2].innerText) - (b.children[2].innerText));
      break;

    case 'Salary':
      rows.sort((a, b) =>
        (a.children[3].innerText.slice(1).split(',').join(''))
        - (b.children[3].innerText.slice(1).split(',').join('')));
      break;
  }

  rows.forEach(item => tbody.append(item));
});
