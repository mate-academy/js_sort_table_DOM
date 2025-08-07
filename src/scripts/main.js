'use strict';

// write code here
const $tableHeader = document.querySelector('thead').firstElementChild;
const $tableBody = document.querySelector('tbody');

const sortColumn = {
  Name: 0,
  Position: 1,
  Age: 2,
  Salary: 3,
};

const sortType = {
  Name: 'string',
  Position: 'string',
  Age: 'number',
  Salary: 'salary',
};

function convertSalary(string) {
  const numberStart = string.split('').findIndex((sym) => !Number.isNaN(+sym));

  return +string.trim().slice(numberStart).replaceAll(',', '');
}

$tableHeader.addEventListener('click', (e) => {
  const header = e.target.closest('th');

  if (!header) {
    return;
  }

  const headerText = header.textContent;

  const columnToSort = sortColumn[headerText];
  const howToSort = sortType[headerText];

  Array.from($tableBody.children)
    .sort((element1, element2) => {
      let value1 = element1.children[columnToSort].textContent;
      let value2 = element2.children[columnToSort].textContent;

      switch (howToSort) {
        case 'string':
          return value1.localeCompare(value2);
        case 'salary':
          value1 = convertSalary(value1);
          value2 = convertSalary(value2);
        // falls through
        case 'number':
          return value1 - value2;
        default:
          return 0;
      }
    })
    .forEach((element) => $tableBody.append(element));
});
