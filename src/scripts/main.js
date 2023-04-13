'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (e) => {
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((a, b) => {
    const cell1 = a.cells[e.target.cellIndex].textContent;
    const cell2 = b.cells[e.target.cellIndex].textContent;

    if (e.target.textContent === 'Salary') {
      const num1 = cell1.replace(/[$,]/g, '');
      const num2 = cell2.replace(/[$,]/g, '');

      return num1 - num2;
    }

    return cell1.localeCompare(cell2);
  });

  tbody.append(...rows);
});
