'use strict';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const row = [...tbody.rows];

table.addEventListener('click', el => {
  const th = el.target.closest('th');

  if (!th) {
    return;
  }

  switch (el.target.innerText) {
    case 'Name':
      row.sort((a, b) =>
        (a.children[0].innerText).localeCompare(b.children[0].innerText));
      break;

    case 'Position':
      row.sort((a, b) =>
        (a.children[1].innerText).localeCompare(b.children[1].innerText));
      break;

    case 'Age':
      row.sort((a, b) =>
        (a.children[2].innerText) - (b.children[2].innerText));
      break;

    case 'Salary':
      row.sort((a, b) =>
        (normalize(a.children[3].innerText))
        - (normalize(b.children[3].innerText)));
      break;
  }

  row.forEach(e => tbody.append(e));
});

function normalize(el) {
  return el.slice(1).split(',').join('');
}
