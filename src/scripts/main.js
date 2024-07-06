'use strict';

const thead = document.querySelector('thead');
const theadRow = thead.querySelector('tr');
const nav = theadRow.querySelectorAll('th');

const navName = nav[0];
const navPosition = nav[1];
const navAge = nav[2];
const navSalary = nav[3];

const tbody = document.querySelector('tbody');
const rows = [...tbody.querySelectorAll('tr')];

function convertToNumber(str) {
  const cleanStr = str
    .split('')
    .filter((ch) => (ch >= '0' && ch <= '9') || ch === '.')
    .join('');

  return parseFloat(cleanStr);
}

function sortList(element) {
  if (element === 'name') {
    rows.sort((rowA, rowB) => {
      const value1 = rowA.querySelector(`td:nth-child(1)`).textContent;
      const value2 = rowB.querySelector(`td:nth-child(1)`).textContent;

      return value1.localeCompare(value2);
    });

    rows.forEach((row) => tbody.appendChild(row));
  }

  if (element === 'position') {
    rows.sort((rowA, rowB) => {
      const value1 = rowA.querySelector(`td:nth-child(2)`).textContent;
      const value2 = rowB.querySelector(`td:nth-child(2)`).textContent;

      return value1.localeCompare(value2);
    });

    rows.forEach((row) => tbody.appendChild(row));
  }

  if (element === 'age') {
    rows.sort((rowA, rowB) => {
      const value1 = rowA.querySelector(`td:nth-child(3)`).textContent;
      const value2 = rowB.querySelector(`td:nth-child(3)`).textContent;

      return convertToNumber(value1) - convertToNumber(value2);
    });

    rows.forEach((row) => tbody.appendChild(row));
  }

  if (element === 'salary') {
    rows.sort((rowA, rowB) => {
      const value1 = rowA.querySelector(`td:nth-child(4)`).textContent;
      const value2 = rowB.querySelector(`td:nth-child(4)`).textContent;

      return convertToNumber(value1) - convertToNumber(value2);
    });

    rows.forEach((row) => tbody.appendChild(row));
  }
}

navName.addEventListener('click', () => sortList('name'));
navPosition.addEventListener('click', () => sortList('position'));
navAge.addEventListener('click', () => sortList('age'));
navSalary.addEventListener('click', () => sortList('salary'));
