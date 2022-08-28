'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');
const tableBody = table.querySelector('tbody');
const rows = tableBody.querySelectorAll('tr');

headers.forEach(function(header, index) {
  header.addEventListener('click', function() {
    switch (header.innerHTML) {
      case 'Name':
        sortColumnString(index);
        break;

      case 'Position':
        sortColumnString(index);
        break;

      case 'Age':
        sortColumnNumber(index);
        break;

      case 'Salary':
        sortColumnSalary(index);
        break;

      default:
        break;
    }
  });
});

const sortColumnString = function(index) {
  const newRows = [...rows];

  newRows.sort((rowA, rowB) =>
    rowA.querySelectorAll('td')[index].innerHTML
      .localeCompare(rowB.querySelectorAll('td')[index].innerHTML));

  rows.forEach((row) => tableBody.removeChild(row));

  newRows.forEach((newRow) => tableBody.appendChild(newRow));
};

const sortColumnNumber = function(index) {
  const newRows = [...rows];

  newRows.sort((rowA, rowB) =>
    rowA.querySelectorAll('td')[index].innerHTML
      - rowB.querySelectorAll('td')[index].innerHTML);

  rows.forEach((row) => tableBody.removeChild(row));

  newRows.forEach((newRow) => tableBody.appendChild(newRow));
};

const sortColumnSalary = function(index) {
  const newRows = [...rows];

  newRows.sort((rowA, rowB) =>
    parseNumber(rowA.querySelectorAll('td')[index].innerHTML)
      - parseNumber(rowB.querySelectorAll('td')[index].innerHTML));

  rows.forEach((row) => tableBody.removeChild(row));

  newRows.forEach((newRow) => tableBody.appendChild(newRow));

  function parseNumber(num) {
    return +num.split(',').join('').split('$').join('');
  };
};
