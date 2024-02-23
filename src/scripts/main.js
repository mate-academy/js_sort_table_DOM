'use strict';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const rowsCollection = tbody.querySelectorAll('tr');

table.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const rows = [...rowsCollection];

    const sortBy = e.target.textContent;

    switch (sortBy) {
      case 'Name':
        sortRows(rows, compareTextValues(0));
        break;

      case 'Position':
        sortRows(rows, compareTextValues(1));
        break;

      case 'Age':
        sortRows(rows, compareNumericValues(2));
        break;

      case 'Salary':
        sortRows(rows, compareSalaryValues(3));
        break;

      default:
        break;
    }

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.append(row));
  }
});

function sortRows(rows, comparator) {
  rows.sort(comparator);
}

function compareTextValues(columnIndex) {
  return (r1, r2) =>
    r1.cells[columnIndex].textContent.localeCompare(
      r2.cells[columnIndex].textContent
    );
}

function compareNumericValues(columnIndex) {
  return (r1, r2) =>
    +r1.cells[columnIndex].textContent - +r2.cells[columnIndex].textContent;
}

function compareSalaryValues(columnIndex) {
  return (r1, r2) =>
    parseSalary(r1.cells[columnIndex].textContent) -
    parseSalary(r2.cells[columnIndex].textContent);
}

function parseSalary(salaryString) {
  return parseFloat(salaryString.replace(/[^0-9.-]+/g, ''));
}
