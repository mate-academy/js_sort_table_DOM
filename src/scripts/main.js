'use strict';

const thead = document.querySelector('tr');
const throwSymbols = /[^\d]/g;

const properties = [...thead.children];
const tBody = document.querySelector('tbody');
const list = [...document.querySelector('tbody').children];

function replacer(value) {
  return value.replace(throwSymbols, '');
}

function sortByProperty(callback, array, selectedColumn, fieldName) {
  if (fieldName === 'Salary' || fieldName === 'Age') {
    return array.sort((a, b) => {
      return (
        Number(callback(a.children[selectedColumn].textContent))
        - Number(callback(b.children[selectedColumn].textContent))
      );
    });
  }

  return array.sort((a, b) => {
    return (a.children[selectedColumn].textContent)
      .localeCompare(b.children[selectedColumn].textContent);
  });
}

thead.addEventListener('click', e => {
  const selectedTarget = e.target.textContent;

  let counter = 0;

  for (const item of properties) {
    if (item.textContent === selectedTarget) {
      break;
    }

    counter++;
  }

  const sortedProperties = sortByProperty(
    replacer, list, counter, selectedTarget
  );

  tBody.append(...sortedProperties);
});
