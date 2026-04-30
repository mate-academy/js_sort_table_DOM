'use strict';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');

function cleanSalary(str) {
  return Number(str.replaceAll('$', '').replaceAll(',', ''));
}

const employees = Array.from(tbody.children).map((row) => {
  const cells = row.children;

  return {
    name: cells[0].textContent,
    position: cells[1].textContent,
    age: Number(cells[2].textContent),
    salary: cleanSalary(cells[3].textContent),
  };
});

function renderEmployees(list) {
  tbody.innerHTML = '';

  list.forEach((employee) => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${employee.name}</td>
      <td>${employee.position}</td>
      <td>${employee.age}</td>
      <td>$${employee.salary.toLocaleString('en-US')}</td>
    `;

    tbody.append(tr);
  });
}

const sortMethods = {
  Name: (a, b) => a.name.localeCompare(b.name),
  Position: (a, b) => a.position.localeCompare(b.position),
  Age: (a, b) => a.age - b.age,
  Salary: (a, b) => a.salary - b.salary,
};

table.addEventListener('click', (ev) => {
  const key = ev.target.textContent.trim();
  const sortMethod = sortMethods[key];

  if (!sortMethod) {
    return;
  }

  employees.sort(sortMethod);
  renderEmployees(employees);
});
