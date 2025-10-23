'use strict';

// write code here
'use strict';

// write code here
const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const theadThs = table.querySelector('thead').querySelector('tr').children;
const tbodyTrs = tbody.querySelectorAll('tr');

for (const th of theadThs) {
  if (th.nodeType === Node.ELEMENT_NODE) {
    th.classList.add(`${th.textContent.toLowerCase()}`);
  }
}

function getArrToSort(nthChildNumber) {
  const arrToSort = [];

  for (const person of tbodyTrs) {
    const arrToAdd = [];

    const personData =
      person.querySelectorAll('td')[nthChildNumber].textContent;

    arrToAdd.push(personData);
    arrToAdd.push(person);
    arrToSort.push(arrToAdd);
  }

  return arrToSort;
}

function sortWords(nthChildNumber) {
  const arrayToSort = getArrToSort(nthChildNumber);

  arrayToSort.sort((word1, word2) => word1[0].localeCompare(word2[0]));

  tbody.querySelectorAll('tr').forEach((tr) => tr.remove());

  for (const person of arrayToSort) {
    if (person[1]) {
      tbody.append(person[1]);
    }
  }
}

function sortNumbers(nthChildNumber) {
  const arrayToSort = getArrToSort(nthChildNumber);

  arrayToSort.sort(
    (num1, num2) =>
      Number(num1[0].replace(/\D/g, '')) - Number(num2[0].replace(/\D/g, '')),
  );

  tbody.querySelectorAll('tr').forEach((tr) => tr.remove());

  for (const person of arrayToSort) {
    if (person[1]) {
      tbody.append(person[1]);
    }
  }
}

const nameTh = document.querySelector('.name');

nameTh.addEventListener('click', (e) => {
  e.preventDefault();

  sortWords(0);
});

const positionTh = document.querySelector('.position');

positionTh.addEventListener('click', (e) => {
  e.preventDefault();

  sortWords(1);
});

const ageTh = document.querySelector('.age');

ageTh.addEventListener('click', (e) => {
  e.preventDefault();

  sortNumbers(2);
});

const salaryTh = document.querySelector('.salary');

salaryTh.addEventListener('click', (e) => {
  e.preventDefault();

  sortNumbers(3);
});
