'use strict';

function Employee(data) {
  for (let i = 0; i < data.length; i++) {
    this[headerRow.children[i].textContent.toLowerCase()] = data[i].textContent;
  }
}

function getSalary(salary) {
  return Number(salary
    .replace(/,/g, '')
    .replace(/\$/g, ''));
}

const headerRow = document
  .querySelector('thead')
  .querySelector('tr');

const tbody = document.querySelector('tbody');
const tbodyRows = tbody.querySelectorAll('tr');

let employees = [];

for (const person of tbodyRows) {
  employees.push(new Employee(person.children));
}

headerRow.addEventListener('click', () => {
  switch (event.target.textContent) {
    case 'Name': {
      employees = employees.sort((a, b) => a.name.localeCompare(b.name));
      break;
    }

    case 'Position': {
      employees = employees.sort((a, b) =>
        a.position.localeCompare(b.position));
      break;
    }

    case 'Age': {
      employees = employees.sort((a, b) => a.age - b.age);
      break;
    }

    case 'Salary': {
      employees = employees.sort((a, b) =>
        getSalary(a.salary) - getSalary(b.salary));
      break;
    }
  }

  for (const objItem of employees) {
    for (const node of tbodyRows) {
      if (objItem.name === node.children[0].textContent) {
        tbody.append(node);
        break;
      }
    }
  }
});
