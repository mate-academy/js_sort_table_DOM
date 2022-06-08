'use strict';

const tHeaders = document.querySelectorAll('th');
const table = document.querySelector('table');
const tBody = table.querySelector('tbody');
const tRows = tBody.querySelectorAll('tr');
const rowsArr = [...tRows];

function convertSalaryToNumber(salary) {
  return parseInt(salary.substring(1).split(',').join(''));
}

for (let i = 0; i < tHeaders.length; i++) {
  tHeaders[i].addEventListener('click', (e) => {
    // I thought i need to create a new one to append sorted rows,
    // but it looks like it works fine with the old one

    // const tabBody = document.createElement('tbody');

    if (tHeaders[i].innerText === 'Salary') {
      const rows = rowsArr.sort((x, y) =>
        convertSalaryToNumber(x.children[i].innerText)
        - convertSalaryToNumber(y.children[i].innerText));

      table.appendChild(tBody);

      rows.forEach(element => {
        tBody.appendChild(element);
      });
    } else if (tHeaders[i].innerText === 'Age') {
      const rows = rowsArr.sort((x, y) =>
        +x.children[i].innerText - +y.children[i].innerText);

      table.appendChild(tBody);

      rows.forEach(element => {
        tBody.appendChild(element);
      });
    } else {
      const rows = rowsArr.sort((x, y) =>
        x.children[i].innerText.localeCompare(y.children[i].innerText));

      table.appendChild(tBody);

      rows.forEach(element => {
        tBody.appendChild(element);
      });
    }
  });
}
