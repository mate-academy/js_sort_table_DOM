'use strict';

// write code here

const peopleContainer = document.querySelector('tbody');
const people = [...peopleContainer.children];

const tableHeader = document.querySelector('thead');

tableHeader.addEventListener('click', (event) => {
  const nameColumn = tableHeader.firstElementChild.children[0];
  const positionColumn = tableHeader.firstElementChild.children[1];
  const ageColumn = tableHeader.firstElementChild.children[2];
  const salaryColumn = tableHeader.firstElementChild.children[3];

  switch (event.target) {
    case nameColumn:
      people.sort((person1, person2) => {
        return (person1.children[0].innerText).localeCompare(
          person2.children[0].innerText
        );
      }).forEach(elem => peopleContainer.append(elem));
      break;

    case positionColumn:
      people.sort((person1, person2) => {
        return (person1.children[1].innerText).localeCompare(
          person2.children[1].innerText
        );
      }).forEach(elem => peopleContainer.append(elem));
      break;

    case ageColumn:
      people.sort((person1, person2) => {
        return (person1.children[2].innerText)
          - person2.children[2].innerText;
      }).forEach(elem => peopleContainer.append(elem));
      break;

    case salaryColumn:
      people.sort((person1, person2) => {
        return +(person1.children[3].innerText
          .slice(1)
          .split(',')
          .join(''))
        - +(person2.children[3].innerText
          .slice(1)
          .split(',')
          .join(''));
      }).forEach(elem => peopleContainer.append(elem));
      break;
  }
});
