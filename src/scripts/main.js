'use strict';

const headers = document.querySelectorAll('th');
const rows = document.querySelector('tbody').children;
const tbody = document.querySelector('tbody');
const persons = [...rows].map(({ children }) => {
  const person = {
    name: children[0].innerText,
    position: children[1].innerText,
    age: children[2].innerText,
    salary: children[3].innerText,
  };

  return person;
});

const sort = (e) => {
  persons.sort((a, b) => {
    switch (e.target.innerHTML) {
      case 'Name':
        return a.name.localeCompare(b.name);

      case 'Position':
        return a.position.localeCompare(b.position);

      case 'Age':
        return b.age - a.age;

      case 'Salary':
        const aConverted = a.salary.slice(1).replace(/,/g, '');
        const bConverted = b.salary.slice(1).replace(/,/g, '');

        return bConverted - aConverted;
    };
  });
  tbody.innerHTML = '';

  for (const person of persons) {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${person.name}</td>
      <td>${person.position}</td>
      <td>${person.age}</td>
      <td>${person.salary}</td>
    `;
    tbody.append(tr);
  }
};

headers.forEach((th) => {
  th.addEventListener('click', sort);
});
