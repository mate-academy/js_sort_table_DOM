'use strict';

const people = [];
const trs = document.querySelectorAll('tr');
const tbody = document.querySelector('tbody');

for (let i = 1; i < trs.length - 1; i++) {
  const person = {};

  person.name = trs[i].children[0].textContent;
  person.position = trs[i].children[1].textContent;
  person.age = trs[i].children[2].textContent;
  person.salary = trs[i].children[3].textContent;

  people.push(person);
}

for (let i = 0; i < 4; i++) {
  trs[0].children[i].addEventListener('click', () => {
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }

    const peopleSorted = structuredClone(people);

    switch (i) {
      case 0:
        peopleSorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 1:
        peopleSorted.sort((a, b) => a.position.localeCompare(b.position));
        break;
      case 2:
        peopleSorted.sort((a, b) => a.age - b.age);
        break;
      case 3:
        peopleSorted.sort(
          (a, b) => parseSalaryInt(a.salary) - parseSalaryInt(b.salary),
        );
    }

    for (let j = 0; j < peopleSorted.length; j++) {
      const tr = document.createElement('tr');

      const personName = document.createElement('td');

      personName.textContent = peopleSorted[j].name;
      tr.appendChild(personName);

      const personPosition = document.createElement('td');

      personPosition.textContent = peopleSorted[j].position;
      tr.appendChild(personPosition);

      const personAge = document.createElement('td');

      personAge.textContent = peopleSorted[j].age;
      tr.appendChild(personAge);

      const personSalary = document.createElement('td');

      personSalary.textContent = peopleSorted[j].salary;
      tr.appendChild(personSalary);

      tbody.appendChild(tr);
    }
  });
}

function parseSalaryInt(salary) {
  return +salary.split(',').join('').split('$').join('');
}
