'use strict';

const table = document.querySelector('table');
const tr = document.body.querySelector('tbody');
const rows = [];

for (let i = 0; i < tr.children.length; i++) {
  rows[i] = tr.children[i].cloneNode(true);
}

table.addEventListener('click', (e) => {
  if (e.target.textContent === 'Name') {
    rows.sort((el1, el2) =>
      el1.cells[0].textContent.localeCompare(el2.cells[0].textContent),
    );

    for (let i = 0; i < tr.children.length; i++) {
      tr.children[i].replaceWith(rows[i]);
    }
  }

  if (e.target.textContent === 'Position') {
    rows.sort((el1, el2) =>
      el1.cells[1].textContent.localeCompare(el2.cells[1].textContent),
    );

    for (let i = 0; i < tr.children.length; i++) {
      tr.children[i].replaceWith(rows[i]);
    }
  }

  if (e.target.textContent === 'Age') {
    rows.sort(
      (el1, el2) =>
        Number(el1.cells[2].textContent) - Number(el2.cells[2].textContent),
    );

    for (let i = 0; i < tr.children.length; i++) {
      tr.children[i].replaceWith(rows[i]);
    }
  }

  if (e.target.textContent === 'Salary') {
    rows.sort(conversion);

    for (let i = 0; i < rows.length; i++) {
      tr.children[i].replaceWith(rows[i]);
    }
  }
});

const conversion = (el1, el2) => {
  const value1 = el1.cells[3].textContent
    .split('$')
    .join('')
    .split(',')
    .sort((el) => typeof +el !== 'number')
    .join('');
  const value2 = el2.cells[3].textContent
    .split('$')
    .join('')
    .split(',')
    .sort((el) => typeof +el !== 'number')
    .join('');

  if (value1 - value2 < 0) {
    return -1;
  } else if (value1 - value2 === 0) {
    return 0;
  } else {
    return 1;
  }
};
