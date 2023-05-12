'use strict';

const tbody = document.querySelector('tbody');
const table = [...tbody.querySelectorAll('tr')];
let sortTable;

document.querySelector('thead').addEventListener('click', (e) => {
  switch (e.target.textContent) {
    case 'Name':
      sortTable = table.sort((a, b) =>
        (a.children[0].textContent.localeCompare(b.children[0].textContent)));
      break;
    case 'Position':
      sortTable = table.sort((a, b) =>
        (a.children[1].textContent.localeCompare(b.children[1].textContent)));
      break;
    case 'Salary':
      sortTable = table.sort((a, b) =>
        (+a.children[3].textContent.slice(1).split(',').join('')
    - +b.children[3].textContent.slice(1).split(',').join('')));
      break;
    case 'Age':
      sortTable = table.sort((a, b) =>
        (+a.children[2].textContent - +b.children[2].textContent));
      break;
  }

  sortTable.forEach(el => tbody.append(el));
});
