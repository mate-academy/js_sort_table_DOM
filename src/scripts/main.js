'use strict';

const table = document.querySelector('table');
const tBody = table.querySelector('tbody');

const getSalary = (salary) => {
  return salary.innerText.slice(1).split(',').join('');
};

const sortByText = (rowsArray, index) => {
  rowsArray.sort((a, b) => a.cells[index].innerText
    .localeCompare(b.cells[index].innerText));
};

const sortByAge = (rowsArray, index) => {
  rowsArray.sort((a, b) => +a.cells[index].innerText
    - +b.cells[index].innerText);
};

const sortBySalary = (rowsArray, index) => {
  rowsArray.sort((a, b) =>
    +getSalary(a.cells[index]) - +getSalary(b.cells[index])
  );
};

const sortTable = (columnIndex, columnType) => {
  if (columnIndex === -1) {
    return;
  }

  const rows = [];

  for (const row of tBody.rows) {
    rows.push(row);
  }

  switch (columnType) {
    case 'age':
      sortByAge(rows, columnIndex);
      break;

    case 'salary':
      sortBySalary(rows, columnIndex);
      break;

    default:
      sortByText(rows, columnIndex);
      break;
  }

  for (const row of rows) {
    tBody.append(row);
  }
};

table.addEventListener('click', e => {
  if (e.target.parentNode.parentNode !== table.querySelector('thead')) {
    return;
  }

  sortTable(
    [...e.target.parentNode.cells].indexOf(e.target),
    e.target.innerText.toLowerCase()
  );
});
