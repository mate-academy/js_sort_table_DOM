'use strict';

const header = document.querySelector('thead');
const headers = [...header.querySelectorAll('th')];
const tableBody = document.querySelector('tbody');

header.addEventListener('click', sortTableByHeaderClick);

function sortTableByHeaderClick(ev) {
  const columnName = ev.target.textContent;
  const index = headers
    .findIndex(title => title.textContent === columnName);
  const rows = [...tableBody.querySelectorAll('tr')];

  const callback = getCallback(columnName, index);

  rows.sort(callback).forEach(row => tableBody.append(row));
}

function parseSalary(str) {
  return Number(str.slice(1).split(',').join(''));
}

function getCallback(columnName, index) {
  return (prev, curr) => {
    const dataPrev = prev.children[index].textContent;
    const dataCurr = curr.children[index].textContent;

    return (columnName === 'Salary')
      ? parseSalary(dataPrev) - parseSalary(dataCurr)
      : dataPrev.localeCompare(dataCurr);
  };
}
