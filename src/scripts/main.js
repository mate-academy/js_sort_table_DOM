'use strict';

const tbody = document.querySelector('tbody');
const rows = [...tbody.children];
let sortedRows = [];

document.querySelector('thead').addEventListener('click', e => {
  sortTable(e.target.textContent);
});

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
      sortedRows = rows.sort((a, b) => +a.children[2].textContent
        - +b.children[2].textContent);
      break;
    case 'Salary':
      sortedRows = rows.sort((a, b) =>
        +a.children[3].textContent.replace(/[^0-9.-]+/g, '')
      - +b.children[3].textContent.replace(/[^0-9.-]+/g, ''));
      break;
    default:
      throw new Error('Unknown step');
  }

  tbody.append(...sortedRows);
}
