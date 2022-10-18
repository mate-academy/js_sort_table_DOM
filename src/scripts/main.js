'use strict';

const table = document.querySelector('table');
let rows = document.querySelectorAll('tbody > tr');
const headers = document.querySelectorAll('thead > tr > th');

const sortTable = (elem) => {
  for (let i = 0; i < 4; i++) {
    if (elem.target === headers[i]) {
      rows = [...rows].sort((a, b) => {
        let stringBegin = a.querySelectorAll('td')[i].innerText;
        let stringEnd = b.querySelectorAll('td')[i].innerText;

        if (elem.target.innerText === 'Age') {
          return +stringBegin - +stringEnd;
        }

        if (elem.target.innerText === 'Salary') {
          stringBegin = parseFloat(stringBegin.slice(1));
          stringEnd = parseFloat(stringEnd.slice(1));

          return +stringBegin - +stringEnd;
        }

        return stringBegin.localeCompare(stringEnd);
      });
    }
  }

  for (const row of rows) {
    table.append(row);
  }
};

table.addEventListener('click', sortTable);
