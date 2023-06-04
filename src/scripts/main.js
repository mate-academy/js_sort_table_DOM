'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');

thead.addEventListener('click', (e) => {
  const th = e.target.closest('th');
  const tbody = table.querySelector('tbody');
  const rows = [...tbody.querySelectorAll('tr')];
  const cellIndex = th.cellIndex;
  const field = th.innerText;

  rows.sort((a, b) => {
    const current = a.cells[cellIndex].innerHTML;
    const next = b.cells[cellIndex].innerHTML;

    if (field === 'Salary') {
      return getSalary(current) - getSalary(next);
    }

    if (field === 'Age') {
      return current - next;
    }

    return current.localeCompare(next);
  });

  tbody.append(...rows);
});

function getSalary(salary) {
  return +salary.replace('$', '').replace(',', '');
}
