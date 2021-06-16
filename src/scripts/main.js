'use strict';

const header = document.querySelector('thead').lastElementChild;

const table = document.querySelector('tbody');
let rows = document.querySelector('tbody').children;

header.addEventListener('click', (e) => {
  const index = [...header.children].indexOf(e.target);

  switch (true) {
    case header.children[index].innerHTML === 'Name'
  || header.children[index].innerHTML === 'Position':
      rows = [...rows].sort((a, b) => a.children[index].innerHTML
        .localeCompare(b.children[index].innerHTML));
      break;

    case header.children[index].innerHTML === 'Age':
      rows = [...rows].sort((a, b) =>
        a.children[index].innerHTML - b.children[index].innerHTML);
      break;

    case header.children[index].innerHTML === 'Salary':

      rows = [...rows].sort((a, b) => {
        const prev = a.children[index].innerHTML
          .replace('$', '')
          .replace(',', '');
        const curr = b.children[index].innerHTML
          .replace('$', '')
          .replace(',', '');

        return prev - curr;
      });
      break;
  }

  for (const row of rows) {
    table.append(row);
  }
});
