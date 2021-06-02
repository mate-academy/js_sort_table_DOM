'use strict';

// write code here
// const table = document.querySelectorAll('table');
// const trs = [...document.querySelectorAll('tr')];

const ths = document.querySelectorAll('thead th');
const table = document.querySelector('table');
const tableBody = table.querySelector('tbody');
const rows = tableBody.querySelectorAll('tr');

// looking for our ths
for (let i = 0; i < ths.length; i++) {
  ths[i].addEventListener('click', function() {
    getItemSort(i);
  });
}

// function for convert string to number
function getSalaryNumber(salary) {
  return +salary.substr(1).split(',').join('');
}

// function for sort our columns
function getItemSort(i) {
  const newRows = Array.from(rows);
  let sort;

  if (ths[i].textContent === 'Salary') {
    sort = newRows.sort((a, b) =>
      getSalaryNumber(a.children[i].innerText)
      - getSalaryNumber(b.children[i].innerText));
  } else {
    sort = newRows.sort((a, b) =>
      (a.children[i].innerText > b.children[i].innerText) ? 1 : -1);
  };

  // remove old row
  for (const row of rows) {
    tableBody.removeChild(row);
  };

  // add a new row
  for (const nRow of sort) {
    tableBody.appendChild(nRow);
  };
}
