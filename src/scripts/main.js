'use strict';

const table = document.querySelector('table');
const tBody = table.querySelector('tbody');
const tRows = tBody.querySelectorAll('tr');
const rowsArr = [...tRows];
const theaders = document.querySelector('tr');

function convertSalaryToNumber(salary) {
  return parseInt(salary.substring(1).split(',').join(''));
}

theaders.addEventListener('click', (e) => {
  const header = [...theaders.children].indexOf(e.target);

  if (e.target.innerText === 'Salary') {
    const rows = rowsArr.sort((x, y) =>
      convertSalaryToNumber(x.children[header].innerText)
        - convertSalaryToNumber(y.children[header].innerText));

    table.appendChild(tBody);

    rows.forEach(element => {
      tBody.appendChild(element);
    });
  } else if (e.target.innerText === 'Age') {
    const rows = rowsArr.sort((x, y) =>
      +x.children[header].innerText - +y.children[header].innerText);

    table.appendChild(tBody);

    rows.forEach(element => {
      tBody.appendChild(element);
    });
  } else {
    const rows = rowsArr.sort((x, y) =>
      x.children[header].innerText.localeCompare(y.children[header].innerText));

    table.appendChild(tBody);

    rows.forEach(element => {
      tBody.appendChild(element);
    });
  }
});
