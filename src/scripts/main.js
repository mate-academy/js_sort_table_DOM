'use strict';

const table = document.querySelector('table');
const tbody = table.tBodies[0];
const employeess = [...tbody.children];

table.addEventListener('click', (event) => {
  const target = event.target;

  switch (target.textContent) {
    case 'Name':
      employeess.sort((a, b) => {
        return (a.children[0].textContent
          .localeCompare(b.children[0].textContent));
      });

      break;

    case 'Position':
      employeess.sort((a, b) => {
        return (a.children[1].textContent
          .localeCompare(b.children[1].textContent));
      });

      break;

    case 'Age':
      employeess.sort((a, b) => {
        return (a.children[2].textContent
          .localeCompare(b.children[2].textContent));
      });

      break;

    case 'Salary':
      employeess.sort((a, b) => {
        return Number(b.children[3].textContent.replace(/[$,]/g, ''))
          - Number(a.children[3].textContent.replace(/[$,]/g, ''));
      });

      break;
  }
  tbody.parentElement.append(...employeess);
});
