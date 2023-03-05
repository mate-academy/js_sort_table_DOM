'use strict';

const columnName = document.querySelectorAll('th')[0];
const columnPosition = document.querySelectorAll('th')[1];
const columnAge = document.querySelectorAll('th')[2];
const columnSalary = document.querySelectorAll('th')[3];
const list = document.querySelector(' tbody');
const person = [...list.querySelectorAll('tr')];

columnName.addEventListener('click', () => {
  sortString(person, 0);
});

columnPosition.addEventListener('click', () => {
  sortString(person, 1);
});

columnAge.addEventListener('click', () => {
  sortNumber(person, 2);
});

columnSalary.addEventListener('click', () => {
  sortNumber(person, 3);
});

function sortString(arr, i) {
  arr.sort((a, b) => {
    const stringA = a.children[i].textContent;
    const stringB = b.children[i].textContent;

    return stringA.localeCompare(stringB);
  });

  list.append(...arr);
}

function sortNumber(arr, i) {
  arr.sort((a, b) => {
    const numberA = getNumbers(a.children[i].textContent);
    const numberB = getNumbers(b.children[i].textContent);

    return numberA - numberB;
  });

  list.append(...arr);
}

function getNumbers(string) {
  return +string.split('').map(num => {
    if ('0123456789'.includes(num)) {
      return num;
    }
  }).join('');
}
