'use strict';

const table = document.querySelector('table');
const tabBody = table.querySelector('tbody');
const tabRows = tabBody.querySelectorAll('tr');
const tR = document.querySelector('tr');
const rowsArr = [...tabRows];

function SalaryToNumber(salary) {
  return parseInt(salary.substring(1).split(',').join(''));
}

tR.addEventListener('click', (e) => {
  const header = [...tR.children].indexOf(e.target);

  if (e.target.innerText === 'Salary') {
    const rows = rowsArr.sort((x, y) =>
      SalaryToNumber(x.children[header].innerText)
        - SalaryToNumber(y.children[header].innerText));

    table.appendChild(tabBody);

    rows.forEach(element => {
      tabBody.appendChild(element);
    });
  } else if (e.target.innerText === 'Age') {
    const rows = rowsArr.sort((x, y) =>
      +x.children[header].innerText - +y.children[header].innerText);

    table.appendChild(tabBody);

    rows.forEach(element => {
      tabBody.appendChild(element);
    });
  } else {
    const rows = rowsArr.sort((x, y) =>
      x.children[header].innerText.localeCompare(y.children[header].innerText));

    table.appendChild(tabBody);

    rows.forEach(element => {
      tabBody.appendChild(element);
    });
  }
});
