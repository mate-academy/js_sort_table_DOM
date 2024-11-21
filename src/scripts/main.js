'use strict';

const table = document.querySelector('table');

const tableHeaders = [...table.children[0].rows[0].cells];

tableHeaders.forEach((th) => {
  th.addEventListener('click', () => {
    sortTable(th.textContent);
  });
});

function sortTable(type) {
  const tBody = table.children[1];
  const bodyRows = [...tBody.rows];

  switch (type) {
    case 'Name':
      bodyRows.sort((a, b) => {
        return a.cells[0].innerText.localeCompare(b.cells[0].innerText);
      });
      break;

    case 'Position':
      bodyRows.sort((a, b) => {
        return a.cells[1].innerText.localeCompare(b.cells[1].innerText);
      });
      break;

    case 'Age':
      bodyRows.sort((a, b) => {
        return Number(a.cells[2].innerText) - Number(b.cells[2].innerText);
      });
      break;

    case 'Salary':
      bodyRows.sort((a, b) => {
        const aSalary = getNumberFromSalaryValue(a.cells[3].innerText);
        const bSalary = getNumberFromSalaryValue(b.cells[3].innerText);

        return aSalary - bSalary;
      });
      break;

    default:
      break;
  }

  bodyRows.forEach((item) => {
    tBody.appendChild(item);
  });
}

function getNumberFromSalaryValue(value) {
  return Number(value.replace(',', '').slice(1));
}
