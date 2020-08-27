'use strict';

const tableHeadRow = document.querySelector('thead');
const tableHeadContent = [];

const tableBody = document.querySelector('tbody');
const tableRows = tableBody.querySelectorAll('tr');

const employees = [];

for (const element of tableHeadRow.querySelectorAll('th')) {
  tableHeadContent.push(element.innerText);
}

for (const element of tableRows) {
  const row = element.querySelectorAll('td');
  const rowContent = [];
  const employee = {};

  for (const item of row) {
    rowContent.push(item.innerText);
  }

  for (let i = 0; i < rowContent.length; i++) {
    employee[tableHeadContent[i]] = rowContent[i];
  }

  employees.push(employee);
}

tableHeadRow.addEventListener('click', (event) => {
  switch (event.target.innerText) {
    case tableHeadContent[0]:
      employees.sort((a, b) => a.Name.localeCompare(b.Name));
      break;
    case tableHeadContent[1]:
      employees.sort((a, b) => a.Position.localeCompare(b.Position));
      break;
    case tableHeadContent[2]:
      employees.sort((a, b) => (+a.Age) - (+b.Age));
      break;
    case tableHeadContent[3]:
      employees.sort((a, b) => (+a.Salary.replace(',', '').slice(1))
        - (+b.Salary.replace(',', '').slice(1)));
      break;
  }

  tableBody.innerHTML = '';

  for (const employee of employees) {
    const newRow = document.createElement('tr');

    newRow.insertAdjacentHTML('afterbegin', `
      <td>${employee.Name}</td>
      <td>${employee.Position}</td>
      <td>${employee.Age}</td>
      <td>${employee.Salary}</td>
    `);

    tableBody.append(newRow);
  }
});
