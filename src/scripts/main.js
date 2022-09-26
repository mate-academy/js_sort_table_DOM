'use strict';

function sortFunction(a, b) {
  if (a.includes('$')) {
    const first = +(a.split(',').join('').slice(1));
    const second = +(b.split(',').join('').slice(1));

    return first - second;
  }

  if (isNaN(a)) {
    return a.localeCompare(b);
  }

  return a - b;
}

function Person(nam, position, age, salary) {
  this.name = nam;
  this.position = position;
  this.age = age;
  this.salary = salary;
}

const table = document.querySelector('table');

table.addEventListener('click', () => {
  const tableBody = document.querySelector('tbody');

  if (event.target.contains(tableBody)) {
    return;
  }

  let people = [...document.querySelectorAll('tr')].slice(1, -1);

  for (const person of people) {
    person.remove();
  }

  people = people.map((person) =>
    new Person(
      person.children[0].innerText,
      person.children[1].innerText,
      person.children[2].innerText,
      person.children[3].innerText));

  const property = event.target.innerText.toLowerCase();

  people.sort((a, b) => sortFunction(a[property], b[property]));

  for (const person of people) {
    const insert = document.createElement('tr');

    insert.innerHTML = `
            <td>${person.name}</td>
            <td>${person.position}</td>
            <td>${person.age}</td>
            <td>${person.salary}</td>
        `;

    tableBody.append(insert);
  }
});
