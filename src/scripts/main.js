'use strict';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const rows = [...tbody.rows];

table.addEventListener('click', (ev) => {
  const targetTh = ev.target.closest('th');

  if (!targetTh) {
    return;
  }

  switch (targetTh.textContent) {
    case 'Name':
      rows.sort((a, b) => {
        return a.children[0].textContent.localeCompare(
          b.children[0].textContent,
        );
      });
      break;

    case 'Position':
      rows.sort((a, b) => {
        return a.children[1].textContent.localeCompare(
          b.children[1].textContent,
        );
      });
      break;

    case 'Age':
      rows.sort((a, b) => {
        return a.children[2].textContent.localeCompare(
          b.children[2].textContent,
        );
      });
      break;

    case 'Salary':
      rows.sort((a, b) => {
        const salaryA = parseFloat(
          a.children[3].textContent.replace(/[$,]/g, ''),
        );
        const salaryB = parseFloat(
          b.children[3].textContent.replace(/[$,]/g, ''),
        );

        return salaryA - salaryB;
      });
      break;
  }
  tbody.innerHTML = '';

  rows.forEach((row) => tbody.appendChild(row));
});
