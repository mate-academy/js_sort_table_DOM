'use strict';

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

// define columns positions
const namePosition = 0;
const positionPosition = 1;
const agePosition = 2;
const salaryPosition = 3;

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
document.querySelectorAll('th').forEach((th, index) => {
  switch (index) {
    case namePosition:
      th.addEventListener('click', sortNames); break;
    case positionPosition:
      th.addEventListener('click', sortPositions); break;
    case agePosition:
      th.addEventListener('click', sortAges); break;
    case salaryPosition:
      th.addEventListener('click', sortSalaries); break;
  }
});
