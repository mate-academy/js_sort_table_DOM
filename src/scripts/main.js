'use strict';

const trBody = document.querySelectorAll('tbody tr');

const theadName = document.querySelector('thead')
  .firstElementChild.children[0];

theadName.addEventListener('click', (e) => {
  sortedByName(trBody);
});

const theadPosition = document.querySelector('thead')
  .firstElementChild.children[1];

theadPosition.addEventListener('click', (e) => {
  sortedByPosition(trBody);
});

const theadAge = document.querySelector('thead')
  .firstElementChild.children[2];

theadAge.addEventListener('click', (e) => {
  sortedByAge(trBody);
});

const theadSalary = document.querySelector('thead')
  .firstElementChild.children[3];

theadSalary.addEventListener('click', (e) => {
  sortedBySalary(trBody);
});

function sortedByName(data) {
  const result = [...data].sort((first, second) => {
    const firstName = slicedName(first.children[0].innerText);
    const secondName = slicedName(second.children[0].innerText);

    return firstName.localeCompare(secondName);
  });

  return result.forEach(newValue => data[0].parentElement.append(newValue));
}

function sortedByPosition(data) {
  const result = [...data].sort((first, second) => {
    const firstName = slicedName(first.children[1].innerText);
    const secondName = slicedName(second.children[1].innerText);

    return firstName.localeCompare(secondName);
  });

  return result.forEach(newValue => data[0].parentElement.append(newValue));
}

function sortedByAge(data) {
  const result = [...data].sort((first, second) => {
    return (+(first.children[2].innerText) - (+(second.children[2].innerText)));
  });

  return result.forEach(newValue => data[0].parentElement.append(newValue));
}

function sortedBySalary(data) {
  const result = [...data].sort((first, second) => {
    const firstSalary = convertingToNumber(first);
    const secondSalary = convertingToNumber(second);

    return firstSalary - secondSalary;
  });

  return result.forEach(newValue => data[0].parentElement.append(newValue));
}

function slicedName(fullName) {
  let result = null;
  const space = fullName.indexOf(' ');

  result = fullName.slice(0, space + 1);

  return result;
}

function convertingToNumber(value) {
  const valueSalary = value.children[3].innerText;

  let result = '';

  for (const el of valueSalary) {
    if (el === ',' || el === '$') {

    } else {
      result += el;
    }
  }

  result = +(result);

  return result;
}
