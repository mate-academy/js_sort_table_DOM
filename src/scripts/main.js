'use strict';

const body = document.querySelector('tbody');
const rows = [...body.children];
let sortedRows = [];

document.querySelector('thead')
  .addEventListener('click', (e) => sortTable(e.target.textContent));

function sortTable(textContent) {
  switch (textContent) {
    case 'Name':
      sortedRows = rows.sort((a, b) =>
        a.children[0].textContent.localeCompare(b.children[0].textContent));
      break;
    case 'Position':
      sortedRows = rows.sort((a, b) =>
        a.children[1].textContent.localeCompare(b.children[1].textContent));
      break;
    case 'Age':
      sortedRows = rows.sort((a, b) => parseFloat(a.children[2].textContent)
        - parseFloat(b.children[2].textContent));
      break;
    case 'Salary':
      sortedRows = rows.sort((a, b) => parseSalary(a.children[3].textContent)
        - parseSalary(b.children[3].textContent));
      break;
  }

  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
  sortedRows.forEach(row => body.append(row));
}

function parseSalary(salary) {
  return parseFloat(salary.replace(/[^0-9.-]+/g, ''));
}
