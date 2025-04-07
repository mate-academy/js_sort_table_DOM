'use strict';

const tableHeader = document.querySelector('thead tr');

tableHeader.addEventListener('click', (e) => {
  sortTable(e.target.textContent);

  employees.forEach((employee) => {
    document.querySelector('tbody').append(employee.table);
  });
});

const tableBody = document.querySelectorAll('tbody tr');
const employees = Array.from(tableBody).map((employee) => {
  return {
    table: employee,
    name: employee.children[0].textContent,
    position: employee.children[1].textContent,
    age: +employee.children[2].textContent,
    salary: employee.children[3].textContent,
  };
});

function sortTable(sortValue) {
  if (sortValue === 'Age') {
    return employees.sort((employee1, employee2) => {
      return employee1.age - employee2.age;
    });
  }

  if (sortValue === 'Salary') {
    return employees.sort((employee1, employee2) => {
      const empl1Salary = +employee1.salary.slice(1).split(',').join('');
      const empl2Salary = +employee2.salary.slice(1).split(',').join('');

      return empl1Salary - empl2Salary;
    });
  }

  if (sortValue === 'Name' || sortValue === 'Position') {
    return employees.sort((employee1, employee2) => {
      return employee1[sortValue.toLowerCase()].localeCompare(
        employee2[sortValue.toLowerCase()],
      );
    });
  }
}
