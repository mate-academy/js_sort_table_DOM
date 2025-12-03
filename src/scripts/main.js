'use strict';

function parseSalary(value) {
  return Number(value.replace(/[$,]/g, ''));
}

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const rows = document.querySelectorAll('tbody tr');
  const rowsArr = Array.from(rows);
  const colIndex = th.cellIndex;

  rowsArr.sort((rowA, rowB) => {
    const a = rowA.children[colIndex].textContent.trim();
    const b = rowB.children[colIndex].textContent.trim();

    if (colIndex === 3) {
      return parseSalary(a) - parseSalary(b);
    }

    return a.localeCompare(b);
  });

  const tbody = document.querySelector('tbody');

  rowsArr.forEach((row) => tbody.appendChild(row));
});
