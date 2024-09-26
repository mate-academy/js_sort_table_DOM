'use strict';

const employees = document.querySelectorAll('tr');
const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  const sortParam = e.target.closest('th').innerText;

  if (sortParam) {
    const employeesSorted = [...listSorting(employees, sortParam)]
      .map(row => [...row.children].map(cell => cell.innerText));

    for (let i = 1; i < employees.length - 1; i++) {
      [...employees[i].children].forEach((cell, index) => {
        cell.innerText = employeesSorted[i - 1][index];
      });
    }
  }
});

function listSorting(list, sortParam) {
  const listEmployees = [...list].slice(1, -1);

  return listEmployees.sort((a, b) => {
    switch (sortParam) {
      case 'Age':
        return +a.children[2].innerText - +b.children[2].innerText;

      case 'Salary':
        return salaryToNumber(a.children[3].innerText)
          - salaryToNumber(b.children[3].innerText);

      case 'Name':
        return (a.children[0].innerText).localeCompare(b.children[0].innerText);

      case 'Position':
        return (a.children[1].innerText).localeCompare(b.children[1].innerText);

      default:
        break;
    }
  });
};

function salaryToNumber(string) {
  return +string.slice(1).split(',').join('');
};
