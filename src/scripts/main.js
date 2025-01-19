'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const headers = [...thead.querySelectorAll('th')];

headers.forEach((header) => {
  header.addEventListener('click', () => sortBy(header.innerText));
});

const peopleArray = [];
const people = [...tbody.children];

people.forEach((person) => {
  const arrayPerson = [];

  [...person.children].forEach((td) => {
    arrayPerson.push(td.innerHTML);
  });

  peopleArray.push(arrayPerson);
});

function sortBy(headerText) {
  switch (headerText) {
    case 'Name':
      peopleArray.sort((a, b) => a[0].localeCompare(b[0]));
      break;
    case 'Position':
      peopleArray.sort((a, b) => a[1].localeCompare(b[1]));
      break;
    case 'Age':
      peopleArray.sort((a, b) => parseInt(a[2]) - parseInt(b[2]));
      break;
    case 'Salary':
      peopleArray.sort(
        (a, b) =>
          parseInt(a[3].replace(/[$,]/g, '')) -
          parseInt(b[3].replace(/[$,]/g, '')),
      );
      break;

    default:
      break;
  }

  renderSortedPeople(peopleArray);
}

function renderSortedPeople(sortedPeople) {
  [...tbody.children].forEach((person) => person.remove());

  sortedPeople.forEach((person) => {
    const tr = document.createElement('tr');

    person.forEach((field) => {
      const td = document.createElement('td');

      td.innerHTML = field;

      tr.insertAdjacentElement('beforeend', td);
    });

    tbody.insertAdjacentElement('beforeend', tr);
  });
}
