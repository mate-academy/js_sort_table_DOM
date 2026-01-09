'use strict';

const tableBody = document.querySelector('tbody');
const tableHeader = document.querySelector('thead');

function getSalaryValue(salaryString) {
  return Number(salaryString.replace(/[^0-9.-]+/g, ''));
}

tableHeader.addEventListener('click', (eventClick) => {
  const th = eventClick.target.closest('th');

  if (!th) {
    return;
  }

  const listEmployee = [...tableBody.querySelectorAll('tr')];

  listEmployee.sort((firstRow, secondRow) => {
    const firstValue = firstRow.cells[th.cellIndex].textContent;
    const secondValue = secondRow.cells[th.cellIndex].textContent;

    if (th.cellIndex === 2 || th.cellIndex === 3) {
      return getSalaryValue(firstValue) - getSalaryValue(secondValue);
    }

    return firstValue.localeCompare(secondValue);
  });

  tableBody.append(...listEmployee);
});
