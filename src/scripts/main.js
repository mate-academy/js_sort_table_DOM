'use strict';

const rows = [...document.querySelector('tbody').children];
let people = [];

for (const row of rows) {
  people.push({
    name: row.children[0].textContent,
    position: row.children[1].textContent,
    age: row.children[2].textContent,
    salary: row.children[3].textContent,
  });
}

document.querySelector('thead')
  .addEventListener('click', (e) => sortTable(e.target.textContent));

function sortTable(textContent) {
  if (textContent === 'Name') {
    people = people.sort((a, b) => a.name.localeCompare(b.name));
  } else if (textContent === 'Position') {
    people = people.sort((a, b) => a.position.localeCompare(b.position));
  } else if (textContent === 'Age') {
    people = people.sort((a, b) => parseFloat(a.age) - parseFloat(b.age));
  } else if (textContent === 'Salary') {
    people = people.sort((a, b) =>
      parseSalary(a.salary) - parseSalary(b.salary));
  }

  for (const i in people) {
    rows[i].children[0].textContent = people[i].name;
    rows[i].children[1].textContent = people[i].position;
    rows[i].children[2].textContent = people[i].age;
    rows[i].children[3].textContent = people[i].salary;
  }
}

function parseSalary(salary) {
  return parseFloat(salary.replace(/[^0-9.-]+/g, ''));
}
