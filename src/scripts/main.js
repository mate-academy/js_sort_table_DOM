'use strict';

const table = document.querySelector('table');
const head = table.tHead;
const body = table.tBodies[0];
const rows = body.rows;

head.addEventListener('click', (event) => {
  const sortingField = event.target.textContent;

  const sortedRows = [...rows].sort((a, b) => {
    switch (sortingField) {
      case 'Name':
        return a.children[0].textContent
          .localeCompare(b.children[0].textContent);

      case 'Position':
        return a.children[1].textContent
          .localeCompare(b.children[1].textContent);

      case 'Age':
        return +a.children[2].textContent
          - +b.children[2].textContent;

      case 'Salary':
        return parseSalary(a.children[3].textContent)
          - parseSalary(b.children[3].textContent);

      default:
        return 0;
    }
  });

  sortedRows.forEach(row => body.append(row));
});

function parseSalary(salary) {
  return +salary.slice(1).replace(',', '');
}
