'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = [...tbody.rows];

thead.addEventListener('click', e => {
  const cell = e.target;
  const idx = cell.cellIndex;

  switch (cell.textContent) {
    case 'Name':
    case 'Position':
      rows.sort((a, b) => {
        return a.cells[idx].textContent.localeCompare(b.cells[idx].textContent);
      });
      break;
    case 'Age':
      rows.sort((a, b) => {
        return +a.cells[idx].textContent - +b.cells[idx].textContent;
      });
      break;
    case 'Salary':
      rows.sort((a, b) => {
        const aSalary = +a.cells[idx].textContent.replace(/[$,]/g, '');
        const bSalary = +b.cells[idx].textContent.replace(/[$,]/g, '');

        return aSalary - bSalary;
      });
      break;
  }

  tbody.append(...rows);
});
