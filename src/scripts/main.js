'use strict';

const table = document.querySelector('table');
const tableHead = [...table.rows[0].cells];
const tableRows = [...table.tBodies[0].rows];

table.addEventListener('click', (event) => {
  if (tableHead.includes(event.target)) {
    const sortString = (a, b) => {
      return a.localeCompare(b);
    };

    const sortAge = (a, b) => {
      return +a - +b;
    };

    const sortSalary = (a, b) => {
      return +(a.replace(/[\s.,$]/g, '')) - +(b.replace(/[\s.,$]/g, ''));
    };

    const selectedRow = event.target.textContent;

    if (selectedRow === 'Name' || selectedRow === 'Position') {
      return sortTable(event.target, sortString);
    }

    if (selectedRow === 'Age') {
      return sortTable(event.target, sortAge);
    }

    if (selectedRow === 'Salary') {
      return sortTable(event.target, sortSalary);
    }
  }
});

function sortTable(columnHeader, compareFunction) {
  const index = tableHead.indexOf(columnHeader);

  const sortedRows = tableRows.sort((a, b) => {
    const columnA = a.querySelectorAll('td')[index].textContent;
    const columnB = b.querySelectorAll('td')[index].textContent;

    return compareFunction(columnA, columnB);
  });

  for (const row of sortedRows) {
    table.tBodies[0].append(row);
  }
}
