'use strict';

const headNames = document.querySelector('thead');
const [...positionList] = document.querySelectorAll('tr');
const newPosition = positionList.slice(1, -1);
const people = [];

for (let i = 0; i < newPosition.length; i++) {
  const [...item] = newPosition[i].querySelectorAll('td');
  const human = {};

  human.name = item[0].textContent;
  human.position = item[1].textContent;
  human.age = +item[2].textContent;
  human.salary = item[3].textContent;

  people.push(human);
}

headNames.addEventListener('click', (e) => {
  switch (e.target.textContent) {
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
      people.sort((a, b) => {
        const aSalary = a.salary.slice(1).split(',').join('');
        const bSalary = b.salary.slice(1).split(',').join('');

        return aSalary - bSalary;
      });
      break;
  }

  for (let k = 0; k < newPosition.length; k++) {
    const [...items] = newPosition[k].querySelectorAll('td');

    items[0].textContent = people[k].name;
    items[1].textContent = people[k].position;
    items[2].textContent = people[k].age;
    items[3].textContent = people[k].salary;
  }
});
