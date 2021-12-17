'use strict';

const tBody = document.querySelector('tbody');
const tr = tBody.querySelectorAll('tr');
const tHead = document.querySelector('thead');
const th = tHead.querySelectorAll('th');

tHead.addEventListener('click', (e) => {
  const item = e.target.textContent;

  isSorted(item);
});

function isSorted(columnName) {
  const arrayOfEmployees = createArrayOfEmployees(tr);

  if (columnName === 'Name' || columnName === 'Position') {
    arrayOfEmployees.sort((a, b) => a[columnName].localeCompare(b[columnName]));
  } else {
    arrayOfEmployees.sort((a, b) => stringToNumber(a[columnName])
      - stringToNumber(b[columnName]));
  }

  for (let i = 0; i < arrayOfEmployees.length; i++) {
    let counter = 0;

    for (const value in arrayOfEmployees[i]) {
      tBody.rows[i].cells[counter].textContent = arrayOfEmployees[i][value];
      counter++;
    }
  }
}

function getPersonsAttributes(element) {
  const personsAttributes = [];

  for (const value of element) {
    personsAttributes.push(value.textContent);
  }

  return personsAttributes;
}

function createArrayOfEmployees(element) {
  const arrayOfEmployees = [];
  const personsAttributes = getPersonsAttributes(th);

  for (const employeeData of element) {
    const person = {};

    for (let i = 0; i < employeeData.children.length; i++) {
      person[personsAttributes[i]] = employeeData.children[i].textContent;
    }

    arrayOfEmployees.push(person);
  }

  return arrayOfEmployees;
}

function stringToNumber(string) {
  const resultNumber = string.split(',').join('').replace('$', '');

  return +resultNumber;
}
