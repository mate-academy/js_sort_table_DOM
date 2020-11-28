'use strict';

const table = document.querySelector('table');
const tableRows = table.tBodies[0].rows;
const tableHeader = table.tHead.rows[0];

const headerList = [...tableHeader.cells].map(column => column.textContent);

tableHeader.addEventListener('click', event => {
  const formatNumber = number => Number(number.slice(1).replace(',', ''));

  const compareString = (stringA, stringB) => stringA.localeCompare(stringB);
  const compareAge = (AgeA, AgeB) => +AgeA - +AgeB;
  const compareSalary = (salaryA, salaryB) => {
    return formatNumber(salaryA) - formatNumber(salaryB);
  };

  switch (event.target.textContent) {
    case 'Name':
    case 'Position':
      rowSort(event.target, compareString);
      break;

    case 'Age':
      rowSort(event.target, compareAge);
      break;

    case 'Salary':
      rowSort(event.target, compareSalary);
      break;
  }
});

function rowSort(columnHead, comparingFunction) {
  const columnIndex = headerList.indexOf(columnHead.textContent);

  const sortedRows = [...tableRows].sort((rowA, rowB) => {
    const columnA = rowA.querySelectorAll('td')[columnIndex].textContent;
    const columnB = rowB.querySelectorAll('td')[columnIndex].textContent;

    return comparingFunction(columnA, columnB);
  });

  for (const row of sortedRows) {
    table.tBodies[0].append(row);
  }
}
