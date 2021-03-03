'use strict';

const thead = document.querySelector('tr');
const throwSymbols = /[^\d]/g;

const properties = [...thead.children];
const tBody = document.querySelector('tbody');
const list = [...document.querySelector('tbody').children];

function replacer(value) {
  return Number(value.replace(throwSymbols, ''));
}

function sortByProperty(callback, array, selectedColumn, fieldName) {
  const sortStrings = (prevPerson, nextPerson) => {
    const prevProperty = prevPerson.children[selectedColumn].textContent;
    const nextProperty = nextPerson.children[selectedColumn].textContent;

    return prevProperty.localeCompare(nextProperty);
  };

  const sortNumbers = (prevPerson, nextPerson) => {
    const prevProperty = prevPerson.children[selectedColumn].textContent;
    const nextProperty = nextPerson.children[selectedColumn].textContent;

    if (prevProperty.match(throwSymbols) !== null) {
      return callback(prevProperty) - callback(nextProperty);
    }

    return prevProperty - nextProperty;
  };

  let sortedColumn = null;

  switch (fieldName) {
    case 'Name':
      sortedColumn = array.sort(sortStrings);
      break;

    case 'Position':
      sortedColumn = array.sort(sortStrings);
      break;

    case 'Age':
      sortedColumn = array.sort(sortNumbers);
      break;

    case 'Salary':
      sortedColumn = array.sort(sortNumbers);
      break;

    default: return 0;
  }

  return sortedColumn;
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
