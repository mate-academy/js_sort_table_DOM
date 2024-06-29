/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
'use strict';

const NAME = 'Name';
const POSITION = 'Position';
const AGE = 'Age';
const SALARY = 'Salary';

const headers = document.querySelectorAll('th');
const topHeaders = Array.from(headers).slice(0, 4);
const table = Array.from(document.querySelectorAll('tr', 'td')).slice(1, -1);
const staff = [];

table.forEach((row) => {
  const memberStaff = {};

  memberStaff.name = row.querySelectorAll('td')[0].textContent;
  memberStaff.position = row.querySelectorAll('td')[1].textContent;
  memberStaff.age = row.querySelectorAll('td')[2].textContent;
  memberStaff.salary = row.querySelectorAll('td')[3].textContent;

  staff.push(memberStaff);
});

topHeaders.forEach((header) => {
  header.addEventListener('click', (event) => {
    switch (event.target.textContent) {
      case NAME:
        const sortedByName = staff.sort((a, b) => a.name.localeCompare(b.name));

        table.forEach((row, index) => {
          row.querySelectorAll('td')[0].textContent = sortedByName[index].name;

          row.querySelectorAll('td')[1].textContent =
            sortedByName[index].position;

          row.querySelectorAll('td')[2].textContent = sortedByName[index].age;

          row.querySelectorAll('td')[3].textContent =
            sortedByName[index].salary;
        });
        break;

      case POSITION:
        const sortedByPosition = staff.sort((a, b) =>
          a.position.localeCompare(b.position));

        table.forEach((row, index) => {
          row.querySelectorAll('td')[0].textContent =
            sortedByPosition[index].name;

          row.querySelectorAll('td')[1].textContent =
            sortedByPosition[index].position;

          row.querySelectorAll('td')[2].textContent =
            sortedByPosition[index].age;

          row.querySelectorAll('td')[3].textContent =
            sortedByPosition[index].salary;
        });
        break;

      case AGE:
        const sortedByAge = staff.sort((a, b) => a.age - b.age);

        table.forEach((row, index) => {
          row.querySelectorAll('td')[0].textContent = sortedByAge[index].name;

          row.querySelectorAll('td')[1].textContent =
            sortedByAge[index].position;
          row.querySelectorAll('td')[2].textContent = sortedByAge[index].age;

          row.querySelectorAll('td')[3].textContent = sortedByAge[index].salary;
        });
        break;

      case SALARY:
        const sortedBySalary = staff.sort(
          (a, b) =>
            a.salary.slice(1).replace(',', '') -
            b.salary.slice(1).replace(',', ''),
        );

        table.forEach((row, index) => {
          row.querySelectorAll('td')[0].textContent =
            sortedBySalary[index].name;

          row.querySelectorAll('td')[1].textContent =
            sortedBySalary[index].position;
          row.querySelectorAll('td')[2].textContent = sortedBySalary[index].age;

          row.querySelectorAll('td')[3].textContent =
            sortedBySalary[index].salary;
        });

        break;
    }
  });
});
