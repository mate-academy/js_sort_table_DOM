'use strict';

// write code here

const thead = document.querySelector('thead');
const table = document.querySelector('table');
const tableBody = table.querySelector('tbody');
const rows = tableBody.querySelectorAll('tr');

// function for convert string to number
function getSalaryNumber(salary) {
  return +salary.substr(1).split(',').join('');
}

thead.addEventListener('click', (e) => {
  const header = e.target;
  const newRows = Array.from(rows);
  let sort;

  if (header.textContent === 'Salary') {
    sort = newRows.sort((a, b) =>
      getSalaryNumber(a.children[e.target.cellIndex].innerText)
      - getSalaryNumber(b.children[e.target.cellIndex].innerText));
  } else {
    sort = newRows.sort((a, b) =>
      (a.children[e.target.cellIndex].innerText
        > b.children[e.target.cellIndex].innerText)
        ? 1 : -1);
  };

  // remove old row
  for (const row of rows) {
    tableBody.removeChild(row);
  };

  // add a new row
  for (const nRow of sort) {
    tableBody.appendChild(nRow);
  };
});
