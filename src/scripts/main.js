'use strict';

const tableHeader = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const rows = [...document.body.querySelector('tbody').rows];

function sortTable(e) {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  if (th.textContent === 'Salary') {
    rows.sort((trA, trB) => formatingSalary(trA.cells[th.cellIndex].textContent)
      - (formatingSalary(trB.cells[th.cellIndex].textContent)));
  } else {
    rows.sort((trA, trB) => trA.cells[th.cellIndex].textContent
      .localeCompare(trB.cells[th.cellIndex].textContent));
  }

  rows.forEach(tr => tableBody.append(tr));
}

function formatingSalary(salary) {
  return +salary.split('').filter(item =>
    '0123456789'.includes(item)).join('');
}

tableHeader.addEventListener('click', sortTable);
