'use strict';

const tableHeader = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const employeesList = [];

function getEmployees(list) {
  const employee = {
    name: list[0],
    position: list[1],
    age: list[2],
    salary: list[3],
  };

  return employee;
}

for (const child of tableBody.children) {
  const arrayEmployees = child.innerText.split('\t');
  const employeeRow = getEmployees(arrayEmployees);

  employeesList.push(employeeRow);
}

tableHeader.addEventListener('click', e => {
  const element = e.target;

  switch (element.innerText) {
    case ('Name'):
      const sortedByName = sortName(employeesList);

      addSortedColumn(sortedByName);
      break;

    case ('Position'):
      const sortedByPosition = sortPosition(employeesList);

      addSortedColumn(sortedByPosition);
      break;

    case ('Age'):
      const sortedByAge = sortAge(employeesList);

      addSortedColumn(sortedByAge);
      break;

    case ('Salary'):
      const sortedBySalary = sortSalary(employeesList);

      addSortedColumn(sortedBySalary);
      break;
  }
});

function sortName(list) {
  return list.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
}

function sortPosition(list) {
  return list.sort((a, b) => {
    return a.position.localeCompare(b.position);
  });
}

function sortAge(list) {
  return list.sort((a, b) => {
    const age1 = createNumber(a.age);
    const age2 = createNumber(b.age);

    return age1 - age2;
  });
}

function sortSalary(list) {
  return list.sort((a, b) => {
    const salaryA = createNumber(a.salary);
    const salaryB = createNumber(b.salary);

    return salaryA - salaryB;
  });
}

function addSortedColumn(array) {
  tableBody.innerHTML = '';

  return array.forEach(object => {
    tableBody.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${object.name}</td>
      <td>${object.position}</td>
      <td>${object.age}</td>
      <td>${object.salary}</td>
    </tr>
    `);
  });
}

function createNumber(string) {
  if (string.includes('$')) {
    return +(string.slice(1).replace(',', '.'));
  } else {
    return +string;
  }
}
