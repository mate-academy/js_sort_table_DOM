'use strict';

// write code here
const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');

thead.addEventListener('click', (event) => {
  const th = event.target.closest('th');

  if (!th) {
    return;
  }

  const column = th.cellIndex;
  const rows = [...tbody.children];

  const getSalary = (salary) => {
    return salary.split('').slice(1).join('').split(',').join('.');
  };

  rows.sort((rowA, rowB) => {
    const a = rowA.cells[column].textContent;
    const b = rowB.cells[column].textContent;

    if (column === 3) {
      return getSalary(a) - getSalary(b);
    }

    return a.localeCompare(b);
  }
  );

  for (const row of rows) {
    tbody.append(row);
  }
});
