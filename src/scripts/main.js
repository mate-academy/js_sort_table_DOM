'use strict';

const table = document.querySelector('table');
const headerRow = table.tHead.children[0];
const people = [...table.tBodies[0].querySelectorAll('tr')];

headerRow.addEventListener('click', handler);

function handler(event) {
  const header = event.target;
  const headerValues = ['Name', 'Position', 'Age', 'Salary'];

  const sortIndex = headerValues.indexOf(header.innerText);

  tableSort(people, sortIndex);
}

function tableSort(rows, sortIndex) {
  rows.sort((employee1, employee2) => {
    const value1 = [...employee1.children][sortIndex].textContent;
    const value2 = [...employee2.children][sortIndex].textContent;

    return (value1[0] === '$')
      ? salaryConverter(value1) - salaryConverter(value2)
      : value1.localeCompare(value2);
  });
  table.tBodies[0].append(...rows);
}

function salaryConverter(salary) {
  return +salary
    .slice(1)
    .split(',')
    .join('');
}
