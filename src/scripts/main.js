'use strict';

// write code here

const table = document.querySelector('table');
let rows = document.querySelectorAll('tbody > tr');
const headers = document.querySelectorAll('thead > tr > th');

const sortTable = (e) => {
  for (let i = 0; i < 4; i++) {
    if (e.target === headers[i]) {
      rows = [...rows].sort((a, b) => {
        let stringA = a.querySelectorAll('td')[i].innerText;
        let stringB = b.querySelectorAll('td')[i].innerText;

        if (e.target.innerText === 'Age') {
          return +stringA - +stringB;
        }

        if (e.target.innerText === 'Salary') {
          stringA = parseFloat(stringA.slice(1));
          stringB = parseFloat(stringB.slice(1));

          return +stringA - +stringB;
        }

        return stringA.localeCompare(stringB);
      });
    }
  }

  for (const row of rows) {
    table.append(row);
  }
};

table.addEventListener('click', sortTable);
