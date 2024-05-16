'use strict';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const rows = [...tbody.rows];

table.addEventListener('click', (e) => {
  if (e.target.closest('th')) {
    const sortName = e.target.closest('th').textContent;
    const cellIndex = e.target.closest('th').cellIndex;

    rows.sort((a, b) => {
      switch (sortName) {
        case 'Position':
        case 'Name':
          return a.cells[cellIndex].textContent.localeCompare(
            b.cells[cellIndex].textContent,
          );

        case 'Salary':
          const salaryA = a.cells[cellIndex].textContent.replace(/[$,]/g, '');
          const salaryB = b.cells[cellIndex].textContent.replace(/[$,]/g, '');

          return salaryA - salaryB;

        default:
          return (
            a.cells[cellIndex].textContent - b.cells[cellIndex].textContent
          );
      }
    });

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));
  }
});
