'use strict';

const titles = document.querySelector('tr');
const tbody = document.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');

const namesSorted = [...rows].sort((name1, name2) =>
  name1.firstElementChild.textContent.localeCompare(
    name2.firstElementChild.textContent));

const positionSorted = [...rows].sort((position1, position2) =>
  position1.firstElementChild.nextElementSibling.textContent.localeCompare(
    position2.firstElementChild.nextElementSibling.textContent));

const ageSorted = [...rows].sort((value1, value2) =>
  value1.lastElementChild.previousElementSibling.textContent
  - value2.lastElementChild.previousElementSibling.textContent);

const salarySorted = [...rows].sort((value1, value2) =>
  value1.lastElementChild.textContent.replaceAll(',', '').slice(1)
  - value2.lastElementChild.textContent.replaceAll(',', '').slice(1));

titles.firstElementChild.addEventListener('click', () =>
  addHTML(namesSorted));

titles.firstElementChild.nextElementSibling.addEventListener('click', () =>
  addHTML(positionSorted));

titles.lastElementChild.previousElementSibling.addEventListener('click', () =>
  addHTML(ageSorted));

titles.lastElementChild.addEventListener('click', () =>
  addHTML(salarySorted));

const addHTML = (sorted) => {
  tbody.innerHTML = `
  ${[...sorted].map(person => `
  <tr>${person.innerHTML}</tr>
  `).join('')}`;
};
