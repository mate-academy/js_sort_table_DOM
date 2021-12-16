'use strict';

const tBody = document.querySelector('tbody');
const tr = tBody.querySelectorAll('tr');
const thead = document.querySelector('thead');
const th = thead.querySelectorAll('th');
const arrayOfEmployees = [];
const personsAttributes = [];

for (const value of th) {
  personsAttributes.push(value.textContent);
}

for (const employeeData of tr) {
  const person = {};

  for (let i = 0; i < employeeData.children.length; i++) {
    person[personsAttributes[i]] = employeeData.children[i].textContent;
  }

  arrayOfEmployees.push(person);
}

thead.addEventListener('click', (e) => {
  const item = e.target.textContent;

  isSorted(item);
});

function isSorted(columnName) {
  if (columnName === 'Name') {
    arrayOfEmployees.sort((a, b) => a.Name.localeCompare(b.Name));
  }

  if (columnName === 'Position') {
    arrayOfEmployees.sort((a, b) => a.Position.localeCompare(b.Position));
  }

  if (columnName === 'Age') {
    arrayOfEmployees.sort((a, b) => +a.Age - +b.Age);
  }

  if (columnName === 'Salary') {
    arrayOfEmployees.sort((a, b) => stringToNumber(a.Salary)
    - stringToNumber(b.Salary));
  }

  for (let i = 0; i < arrayOfEmployees.length; i++) {
    let counter = 0;

    for (const value in arrayOfEmployees[i]) {
      tBody.rows[i].cells[counter].textContent = arrayOfEmployees[i][value];
      counter++;
    }
  }
}

function stringToNumber(string) {
  const resultNumber = string.split(',').join('').replace('$', '');

  return +resultNumber;
}
