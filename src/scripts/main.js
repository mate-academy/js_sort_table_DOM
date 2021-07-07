'use strict';

const table = document.querySelector('table');
const tableHead = [...table.tHead.firstElementChild.cells];
const tableRows = [...table.tBodies[0].rows];

table.addEventListener('click', (event) => {
  if (tableHead.includes(event.target)) {
    const sortString = (a, b) => {
      return b < a ? 1 : -1;
    };

    const sortNumber = (a, b) => {
      return +(a.replace(/[^+\d]/g, '')) - +(b.replace(/[^+\d]/g, ''));
    };

    const selectedRow = event.target.innerText;

    return (selectedRow === 'Age' || selectedRow === 'Salary')
      ? sortTable(event.target, sortNumber)
      : sortTable(event.target, sortString);
  }
});

function sortTable(header, compareFunction) {
  const indexOfColumn = tableHead.indexOf(header);

  tableRows.sort((a, b) => {
    return compareFunction(
      a.querySelectorAll('td')[indexOfColumn].innerText,
      b.querySelectorAll('td')[indexOfColumn].innerText
    );
  }).forEach(row => table.tBodies[0].append(row));
}
