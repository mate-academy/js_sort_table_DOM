'use strict';

const headers = document.querySelector('tr');
const tbodyRef = document.querySelector('tbody');
const rows = [...(tbodyRef.querySelectorAll('tr'))];

function sortNames() {
  return rows.sort((str1, str2) =>
    str1.firstElementChild.textContent.localeCompare(
      str2.firstElementChild.textContent));
}

function sortPosition() {
  return rows.sort((str1, str2) =>
    str1.firstElementChild.nextElementSibling.textContent.localeCompare(
      str2.firstElementChild.nextElementSibling.textContent));
}

function sortAge() {
  return rows.sort((str1, str2) =>
    parseInt(str1.lastElementChild.previousElementSibling.textContent)
      - parseInt(str2.lastElementChild.previousElementSibling.textContent));
}

function sortSalary() {
  return rows.sort((str1, str2) =>
    parseInt(str1.lastElementChild.textContent.slice(1).split(',').join(''))
      - parseInt(str2.lastElementChild.textContent
        .slice(1).split(',').join('')));
}

function addEvent(element, sortFunction) {
  element.addEventListener('click', () => {
    const sorted = sortFunction();

    tbodyRef.innerHTML = `
    ${sorted.map(person => `
    <tr>${person.innerHTML}</tr>
    `).join('')}`;
  });
};

addEvent(headers.firstElementChild, sortNames);
addEvent(headers.firstElementChild.nextElementSibling, sortPosition);
addEvent(headers.lastElementChild.previousElementSibling, sortAge);
addEvent(headers.lastElementChild, sortSalary);
