'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const trOfHead = thead.querySelector('tr');
const trThThead = trOfHead.querySelectorAll('th');

const arrayOfPeople = [];
const people = [];

const tbody = table.querySelector('tbody');
const trOfTbody = tbody.querySelectorAll('tr');

trOfTbody.forEach((tr) => {
  const tds = tr.querySelectorAll('td');

  tds.forEach((td) => {
    arrayOfPeople.push(td.textContent);
  });
});

for (let i = 0; i < arrayOfPeople.length; i += 4) {
  const person = {
    name: arrayOfPeople[i],
    position: arrayOfPeople[i + 1],
    age: +arrayOfPeople[i + 2],
    salary: parseInt(arrayOfPeople[i + 3].replace(/[$,]/g, '')),
  };

  people.push(person);
}

trThThead.forEach((th) => {
  th.addEventListener('click', (e) => {
    const columnName = e.currentTarget.textContent.trim();

    switch (columnName) {
      case 'Name':
        people.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case 'Position':
        people.sort((a, b) => a.position.localeCompare(b.position));
        break;

      case 'Age':
        people.sort((a, b) => a.age - b.age);
        break;

      case 'Salary':
        people.sort((a, b) => a.salary - b.salary);
        break;

      default:
        break;
    }

    renderTable();
  });
});

function renderTable() {
  tbody.innerHTML = '';

  people.forEach((person) => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${person.name}</td>
      <td>${person.position}</td>
      <td>${person.age}</td>
      <td>$${person.salary.toLocaleString('en-US')}</td>
    `;

    tbody.appendChild(tr);
  });
}

renderTable();
