'use strict';

const cellContent = document.querySelectorAll('tr');
const people = [];

for (let i = 1; i < cellContent.length - 1; i++) {
  const person = {
    name: cellContent[i].children[0].innerText,
    position: cellContent[i].children[1].innerText,
    age: cellContent[i].children[2].innerText,
    salary: cellContent[i].children[3].innerText,
  };

  people.push(person);
}

cellContent[0].addEventListener('click', (event) => {
  sortingList(event.target.innerText.toLowerCase());
});

function sortingList(input) {
  switch (input) {
    case 'salary' :
      people.sort(
        (a, b) =>
          +a.salary.replace(/[,$]/g, '') - +b.salary.replace(/[,$]/g, '')
      );
      break;

    case 'name' :
      people.sort(
        (a, b) => {
          return (a.name < b.name) ? -1
            : (a.name > b.name) ? 1
              : 0;
        });
      break;

    case 'position' :
      people.sort(
        (a, b) => {
          return (a.position < b.position) ? -1
            : (a.position > b.position) ? 1
              : 0;
        });
      break;

    case 'age' :
      people.sort((a, b) => +a.age - +b.age);
      break;
  }

  for (let i = 1; i < cellContent.length - 1; i++) {
    cellContent[i].children[0].innerText = people[i - 1].name;
    cellContent[i].children[1].innerText = people[i - 1].position;
    cellContent[i].children[2].innerText = people[i - 1].age;
    cellContent[i].children[3].innerText = people[i - 1].salary;
  }

  return people;
}
