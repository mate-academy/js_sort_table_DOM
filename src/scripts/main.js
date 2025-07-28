'use strict';

const header = document.querySelector('thead');
const headerItems = header.querySelectorAll('th');
const employees = document.querySelectorAll('tr');
const employeesArr = [];
const tbody = document.querySelector('tbody');

employees.forEach((employee, idx) => {
  if (idx === 0 || idx === employees.length - 1) {
    return;
  }

  const nameEmployee = employee.children[0];
  const position = employee.children[1];
  const age = employee.children[2];
  const salary = employee.children[3];

  employeesArr.push({
    age,
    salary,
    position,
    nameEmployee,
  });
});

headerItems.forEach((item) => {
  item.addEventListener('click', () => {
    let compare = null;

    switch (item.textContent) {
      case 'Position':
        compare = function (a, b) {
          return a.position.textContent
            .toLowerCase()
            .localeCompare(b.position.textContent.toLowerCase());
        };
        break;

      case 'Name':
        compare = function (a, b) {
          return a.nameEmployee.textContent
            .toLowerCase()
            .localeCompare(b.nameEmployee.textContent.toLowerCase());
        };
        break;
      case 'Salary':
        compare = function (a, b) {
          const aCleaned = a.salary.textContent.replace(/[$,]/g, '');
          const bCleaned = b.salary.textContent.replace(/[$,]/g, '');

          return Number(aCleaned) - Number(bCleaned);
        };
        break;

      case 'Age':
        compare = function (a, b) {
          return Number(a.age.textContent) - Number(b.age.textContent);
        };
        break;

      default:
        break;
    }

    if (compare !== null) {
      employeesArr.sort(compare);
    } else {
      employeesArr.sort();
    }

    tbody.innerHTML = '';

    employeesArr.forEach((itemArr) => {
      const tr = document.createElement('tr');

      tr.appendChild(itemArr.nameEmployee);
      tr.appendChild(itemArr.position);
      tr.appendChild(itemArr.age);
      tr.appendChild(itemArr.salary);

      tbody.appendChild(tr);
    });
  });
});
