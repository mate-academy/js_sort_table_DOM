'use strict';

const table = document.querySelector('table');
const rows = table.rows;

const employees = [...rows];

employees.shift();
employees.pop();

const thead = table.tHead;
const tbody = table.tBodies[0];

thead.addEventListener('click', (e) => {
  const header = e.target;

  const sortedEmployees = sort(employees, header.innerText);

  sortedEmployees.forEach((employee) => {
    tbody.append(employee);
  });
});

function sort(people, query) {
  const sortedPeople = [...people];

  switch (query) {
    case 'Name':
      return sortedPeople.sort((person1, person2) => {
        const name1 = person1.cells[0].innerText;
        const name2 = person2.cells[0].innerText;

        return name1.localeCompare(name2);
      });

    case 'Position':
      return sortedPeople.sort((person1, person2) => {
        const name1 = person1.cells[1].innerText;
        const name2 = person2.cells[1].innerText;

        return name1.localeCompare(name2);
      });

    case 'Age':
      return sortedPeople.sort((person1, person2) => {
        const age1 = +person1.cells[2].innerText;
        const age2 = +person2.cells[2].innerText;

        return age1 - age2;
      });

    case 'Salary':
      return sortedPeople.sort((person1, person2) => {
        const salaryStr1 = person1.cells[3].innerText;
        const salary1 = +salaryStr1.replace('$', '').replace(',', '');

        const salaryStr2 = person2.cells[3].innerText;
        const salary2 = +salaryStr2.replace('$', '').replace(',', '');

        return salary1 - salary2;
      });

    default:
      return sortedPeople;
  }
}
