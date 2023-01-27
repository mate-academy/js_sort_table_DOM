'use strict';

function convertSalary(salary) {
  return +salary.slice(1).split(',').join('');
};

function sortTableString(columnNumber) {
  rows.sort((a, b) =>
    a.children[columnNumber].textContent
      .localeCompare(b.children[columnNumber].textContent));
};

const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');
const rows = [...tableBody.querySelectorAll('tr')];

table.addEventListener('click', (e) => {
  const header = e.target.closest('th');

  if (header) {
    switch (e.target.textContent) {
      case 'Name':
        sortTableString(0);
        break;

      case 'Position':
        sortTableString(1);
        break;

      case 'Age':
        rows.sort((a, b) => +a.children[2].textContent
              - +b.children[2].textContent);
        break;

      case 'Salary':
        rows.sort((a, b) => {
          return convertSalary(a.children[3].textContent)
                  - convertSalary(b.children[3].textContent);
        });
    }

    for (const row of rows) {
      tableBody.append(row);
    }
  }
});
