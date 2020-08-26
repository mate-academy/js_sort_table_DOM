'use strict';

// define columns positions
const namePosition = 0;
const positionPosition = 1;
const agePosition = 2;
const salaryPosition = 3;

// define functions
function sortListWithTextValues(list, container) {
  list.sort((a, b) => a.innerText.localeCompare(b.innerHTML));

  toDocumentAppender(list, container);
}

function toDocumentAppender(list, container) {
  list.forEach(elem => {
    container.append(elem.parentElement);
  });
}

function sortNames() {
  sortListWithTextValues(names, tbody);
}

function sortPositions() {
  sortListWithTextValues(positions, tbody);
}

function sortAges() {
  ages.sort((a, b) => a.innerText - b.innerHTML);

  toDocumentAppender(ages, tbody);
}

function sortSalaries() {
  function getNumberFromSalaryString(str) {
    return +str.slice(1).split(',').join('');
  }

  salaries.sort((a, b) => getNumberFromSalaryString(a.innerText)
    - getNumberFromSalaryString(b.innerHTML));

  toDocumentAppender(salaries, tbody);
}

// get container and list
const tbody = document.querySelector('tbody');
const names = [...tbody.querySelectorAll('tr')]
  .map(tr => tr.children[namePosition]);
const positions = [...tbody.querySelectorAll('tr')]
  .map(tr => tr.children[positionPosition]);
const ages = [...tbody.querySelectorAll('tr')]
  .map(tr => tr.children[agePosition]);
const salaries = [...tbody.querySelectorAll('tr')]
  .map(tr => tr.children[salaryPosition]);

// set events
document.querySelectorAll('th')[namePosition]
  .addEventListener('click', sortNames);

document.querySelectorAll('th')[positionPosition]
  .addEventListener('click', sortPositions);

document.querySelectorAll('th')[agePosition]
  .addEventListener('click', sortAges);

document.querySelectorAll('th')[salaryPosition]
  .addEventListener('click', sortSalaries);
