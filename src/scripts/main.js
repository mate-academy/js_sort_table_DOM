'use strict';

const tbody = document.querySelector('tbody');
const table = [...tbody.querySelectorAll('tr')];
let sorttable;

document.querySelector('thead').addEventListener('click', (e) => {
  if (e.target.textContent === 'Name') {
    sorttable = table.sort((a, b) =>
      (a.children[0].textContent.localeCompare(b.children[0].textContent)));
  }

  if (e.target.textContent === 'Position') {
    sorttable = table.sort((a, b) =>
      (a.children[1].textContent.localeCompare(b.children[1].textContent)));
  }

  if (e.target.textContent === 'Salary') {
    sorttable = table.sort((a, b) =>
      (+a.children[3].textContent.slice(1).split(',').join('')
    - +b.children[3].textContent.slice(1).split(',').join('')));
  }

  if (e.target.textContent === 'Age') {
    sorttable = table.sort((a, b) =>
      (+a.children[2].textContent - +b.children[2].textContent));
  }
  sorttable.forEach(el => tbody.append(el));
});
