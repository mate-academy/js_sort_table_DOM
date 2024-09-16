'use strict';

// write code here
const table = document.querySelector('table');
const tableBody = table.tBodies[0];
const employees = getEmployees(tableBody.rows);

document.addEventListener('click', (e) => {
  const tableHeading = e.target.closest('th');

  if (!tableHeading || tableHeading.closest('tFoot')) {
    return;
  }

  const sortKey = tableHeading.textContent.trim('').toLowerCase();
  const compareFunction = createSorterByKey(sortKey);

  employees.sort(compareFunction);
  updateEmployeesMarkup(employees);
});

function formatSalaryToNumber(salary) {
  return Number(salary.replace(/\$|,/gi, ''));
};

function formatNumberToSalary(num) {
  return `$${num.toLocaleString('en')}`;
};

function getEmployees(nodeListOfEmployees) {
  const employeesItems = [...nodeListOfEmployees];

  return employeesItems.map((employee) => ({
    name: employee.cells[0].textContent,
    position: employee.cells[1].textContent,
    age: Number(employee.cells[2].textContent),
    salary: formatSalaryToNumber(employee.cells[3].textContent),
  }));
};

function createSorterByKey(field) {
  return (prev, curr) => typeof curr[field] === 'string'
    ? prev[field].localeCompare(curr[field])
    : prev[field] - curr[field];
};

function updateEmployeesMarkup(employeesList) {
  let tableBodyMarkup = '';

  for (const employee of employeesList) {
    const tableEmployeeMarkup = `
      <tr>
        <td>${employee.name}</td>
        <td>${employee.position}</td>
        <td>${employee.age}</td>
        <td>${formatNumberToSalary(employee.salary)}</td>
      </tr>
    `;

    tableBodyMarkup += tableEmployeeMarkup;
  }

  tableBody.innerHTML = tableBodyMarkup;
}
