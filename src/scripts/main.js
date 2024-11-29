'use strict';

const table = document.querySelector('table');
const rows = table.rows;
const head = rows[0];
const people = [];
const tBody = table.tBodies[0].children;

for (const row of rows) {
  const person = {};

  person.name = row.cells[0].textContent;
  person.position = row.cells[1].textContent;
  person.age = row.cells[2].textContent;
  person.salary = row.cells[3].textContent;
  people.push(person);
}
people.pop();
people.shift();

function salaryToNum(str) {
  const arr = str.split(',');
  const value = arr[0].slice(1) + arr[1];

  return +value;
}
// people.sort((a, b) => a.age.localeCompare(b.age));
// people.sort((a, b) => salaryToNum(a.salary) - salaryToNum(b.salary));

head.addEventListener('click', (e) => {
  const th = e.target.closest('th');
  const sortBy = th.textContent.toLowerCase();

  if (sortBy === 'salary') {
    people.sort((a, b) => salaryToNum(a[sortBy]) - salaryToNum(b[sortBy]));
  } else {
    people.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }

  for (let i = 0; i < tBody.length; i++) {
    tBody[i].cells[0].textContent = people[i].name;
    tBody[i].cells[1].textContent = people[i].position;
    tBody[i].cells[2].textContent = people[i].age;
    tBody[i].cells[3].textContent = people[i].salary;
  }
});
